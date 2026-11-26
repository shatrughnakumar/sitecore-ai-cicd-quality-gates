import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

// Lightweight guard only; CI also runs a dedicated history scanner.
const rules = [
  ['private key', /-----BEGIN (?:[A-Z0-9 ]+ )?PRIVATE KEY-----/],
  ['AWS access key', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
  ['GitHub token', /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})\b/],
  ['credential assignment', /\b(?:api[_-]?key|client[_-]?secret|password|access[_-]?token)\s*[:=]\s*["'][^"'\r\n]{12,}["']/i],
];
export function inspect(path, content) {
  const findings = [];
  if (/(^|\/)\.env(?:\.|$)/i.test(path) && !/(^|\/)\.env\.example$/i.test(path)) findings.push('environment file');
  for (const [name, pattern] of rules) if (pattern.test(content)) findings.push(name);
  return findings;
}
const git = (args) => execFileSync('git', args, { maxBuffer: 32 * 1024 * 1024 });
export function scan(mode) {
  const args = mode === '--staged' ? ['diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z'] : ['ls-files', '-z'];
  const paths = git(args).toString('utf8').split('\0').filter(Boolean);
  let failed = false;
  for (const path of paths) {
    const content = git(['show', `:${path}`]);
    const findings = inspect(path, content.includes(0) ? '' : content.toString('utf8'));
    for (const rule of findings) {
      console.error(`Secret check: ${JSON.stringify(path)} (${rule})`);
      failed = true;
    }
  }
  if (!failed) console.log(`Secret check passed (${paths.length} indexed paths).`);
  return failed ? 1 : 0;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const mode = process.argv[2];
  if (!['--staged', '--tracked'].includes(mode)) throw new Error('Choose --staged or --tracked');
  process.exitCode = scan(mode);
}

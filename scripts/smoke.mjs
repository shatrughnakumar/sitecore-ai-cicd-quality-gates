const origin = process.env.SMOKE_ORIGIN || 'http://127.0.0.1:3000';
let lastError;
for (let attempt = 0; attempt < 30; attempt++) {
  try {
    const health = await fetch(new URL('/api/health', origin), { signal: AbortSignal.timeout(2000) });
    if (!health.ok || (await health.json()).status !== 'ok') throw new Error('Health check failed');
    const page = await fetch(origin, { signal: AbortSignal.timeout(2000) });
    if (!page.ok || !(await page.text()).includes('Quality Gates Lab')) throw new Error('Page check failed');
    console.log('Health and page smoke checks passed.');
    process.exit(0);
  } catch (error) {
    lastError = error;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
throw lastError;

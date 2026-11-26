import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inspect } from './secret-scan.mjs';

test('detects a synthetic token without embedding a complete token', () => {
  assert.deepEqual(inspect('sample.txt', 'ghp_' + 'x'.repeat(36)), ['GitHub token']);
});
test('detects private environment files', () => {
  assert.deepEqual(inspect('nested/.env.local', ''), ['environment file']);
  assert.deepEqual(inspect('.env.example', ''), []);
});
test('detects a synthetic credential assignment', () => {
  assert.deepEqual(inspect('sample.txt', 'password' + '="' + 'x'.repeat(16) + '"'), ['credential assignment']);
});
test('accepts ordinary content', () => {
  assert.deepEqual(inspect('sample.ts', 'export const title = "hello";'), []);
});

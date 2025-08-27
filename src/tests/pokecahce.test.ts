import { describe, expect, test } from 'vitest';
import { Cache } from '../pokecache';

describe('Cache', () => {
  test.concurrent.each([
    {
      key: 'https://example.com',
      val: 'testdata',
      interval: 500, // 1/2 second
    },
    {
      key: 'https://example.com/path',
      val: 'moretestdata',
      interval: 1000, // 1 second
    },
  ])('Test Caching $interval ms', async ({ key, val, interval }) => {
    const cache = new Cache(interval);

    cache.add(key, val);
    const cached = cache.get<typeof val>(key);
    expect(cached).toBe(val);

    // Wait past the interval so the reap loop should delete the entry
    await new Promise((resolve) => setTimeout(resolve, interval + 150));
    const reaped = cache.get<typeof val>(key);
    expect(reaped).toBe(undefined);

    cache.stopReapLoop();
  });

  test('stopReapLoop() prevents future reaping', async () => {
    const interval = 300; // 0.3s
    const cache = new Cache(interval);

    const key = 'k';
    const val = { hello: 'world' };

    cache.add(key, val);
    // Immediately stop the reap loop
    cache.stopReapLoop();

    // Wait longer than interval; if the loop was running, entry would be deleted
    await new Promise((r) => setTimeout(r, interval + 150));
    expect(cache.get<typeof val>(key)).toEqual(val);
  });
});

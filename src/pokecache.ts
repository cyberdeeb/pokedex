type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache: Map<string, CacheEntry<any>> = new Map();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    this.#cache.set(key, { createdAt: Date.now(), val });
  }

  get<T>(key: string): T | undefined {
    const entry = this.#cache.get(key);
    if (entry) {
      return entry.val as T;
    }
    return undefined;
  }

  delete(key: string) {
    this.#cache.delete(key);
  }

  clear() {
    this.#cache.clear();
  }

  #reap(): void {
    const now = Date.now();
    for (const [key, entry] of this.#cache.entries()) {
      if (now - entry.createdAt > this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }

  public stopReapLoop(): void {
    if (!this.#reapIntervalId) return;
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}

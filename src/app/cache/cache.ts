
const cacheName = 'my-cache';

abstract class CacheService {
  abstract key: string;
}

const openCache = async (): Promise<Cache | undefined> => {
  const cacheAvailable = 'caches' in self;
  if (!cacheAvailable) {
    console.error('Cache not available');
    return undefined;
  }
  return caches.open(cacheName);
};

const clearCache = async (): Promise<void> => {
  try {
    const cache = await openCache();
    if (cache) {
      const keys = await cache.keys();
      for await (const iterator of keys) {
        await cache.delete(iterator);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const saveToCache = async (key: string, value: any): Promise<void> => {
  const cache = await openCache();
  return cache?.put(key, new Response(JSON.stringify(value)));
};

const getFromCache = async <T>(key: string): Promise<T | undefined> => {
  const cache = await openCache();
  const response = await cache?.match(`/${key}`);
  const responseText = await response?.text();
  if (responseText) {
    return JSON.parse(responseText) as T;
  }
  return undefined;
};

const deleteFromCache = async (key: string) => {
  const cache = await openCache();
  return cache?.delete(key);
};

export {CacheService, saveToCache, getFromCache, deleteFromCache, clearCache}

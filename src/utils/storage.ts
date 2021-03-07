import localforage from 'localforage';

type Saveable =
    |string
    |number
    |any[]
    |Record<any, any>
    |ArrayBuffer
    |Blob
    |Float32Array
    |Float64Array
    |Int8Array
    |Int16Array
    |Int32Array
    |Uint8Array
    |Uint16Array
    |Uint32Array;

// Setup storage instance
const storage = localforage.createInstance({
    name: 'portfolio',
    version: 1.0,
    storeName: 'portfolioData',
    description: 'Local portfolio data'
});

// Export storage handlers
export const save = (key: string, value: Saveable) => storage.setItem(key, value);
export const get = (key: string) => storage.getItem(key);
export const del = (key: string) => storage.removeItem(key);
export const clear = () => storage.clear();

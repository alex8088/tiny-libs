/* eslint-disable @typescript-eslint/no-explicit-any */
interface SerializableStorage<T> {
  set: (value: T) => void
  get: () => T
}

function useStorage<T extends string | number | boolean | object | null>(
  key: string,
  initialValue: T,
  storage: Storage
): SerializableStorage<T> {
  const type =
    initialValue === null
      ? 'any'
      : initialValue instanceof Map
        ? 'map'
        : initialValue instanceof Set
          ? 'set'
          : initialValue instanceof Date
            ? 'date'
            : typeof initialValue === 'boolean'
              ? 'boolean'
              : typeof initialValue === 'number'
                ? 'number'
                : typeof initialValue === 'object'
                  ? 'object'
                  : 'any'

  const set = (val: T): void => {
    if (val === null) {
      storage.removeItem(key)
    } else {
      let v = ''
      if (type === 'map') {
        v = JSON.stringify(Array.from(val as Map<any, any>).entries())
      } else if (type === 'set') {
        v = JSON.stringify(Array.from(val as Set<any>))
      } else if (type === 'date') {
        v = (val as Date).toISOString()
      } else if (type === 'object') {
        v = JSON.stringify(val)
      } else {
        v = String(val)
      }
      storage.setItem(key, v)
    }
  }

  const get = (): T => {
    const val = storage.getItem(key)
    if (val) {
      let v
      if (type === 'map') {
        v = new Map(JSON.parse(val))
      } else if (type === 'set') {
        v = new Set(JSON.parse(val))
      } else if (type === 'date') {
        v = new Date(val)
      } else if (type === 'boolean') {
        v = val === 'true'
      } else if (type === 'number') {
        v = Number.parseFloat(val)
      } else if (type === 'object') {
        v = JSON.parse(val)
      }
      return v || val
    } else {
      return initialValue
    }
  }

  return {
    set,
    get
  }
}

export function useLocalStorage(
  key: string,
  initialValue: string
): SerializableStorage<string>
export function useLocalStorage(
  key: string,
  initialValue: number
): SerializableStorage<number>
export function useLocalStorage(
  key: string,
  initialValue: boolean
): SerializableStorage<boolean>
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): SerializableStorage<T>
export function useLocalStorage<T = unknown>(
  key: string,
  initialValue: null
): SerializableStorage<T>
export function useLocalStorage<
  T extends string | number | boolean | object | null
>(key: string, initialValue: T): SerializableStorage<T> {
  return useStorage(key, initialValue, localStorage)
}

export function useSessionStorage(
  key: string,
  initialValue: string
): SerializableStorage<string>
export function useSessionStorage(
  key: string,
  initialValue: number
): SerializableStorage<number>
export function useSessionStorage(
  key: string,
  initialValue: boolean
): SerializableStorage<boolean>
export function useSessionStorage<T>(
  key: string,
  initialValue: T
): SerializableStorage<T>
export function useSessionStorage<T = unknown>(
  key: string,
  initialValue: null
): SerializableStorage<T>
export function useSessionStorage<
  T extends string | number | boolean | object | null
>(key: string, initialValue: T): SerializableStorage<T> {
  return useStorage(key, initialValue, sessionStorage)
}

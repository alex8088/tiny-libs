/* eslint-disable  @typescript-eslint/no-explicit-any */
import { EventEmitter } from 'events'

export type EventMap = {
  [key: string]: (...args: any[]) => void
}

export interface TypedEventEmitter<T extends EventMap> {
  addListener<E extends keyof T>(event: E, listener: T[E]): this
  on<E extends keyof T>(event: E, listener: T[E]): this
  once<E extends keyof T>(event: E, listener: T[E]): this

  removeListener<E extends keyof T>(event: E, listener: T[E]): this
  off<E extends keyof T>(event: E, listener: T[E]): this
  removeAllListeners<E extends keyof T>(event?: E): this

  setMaxListeners(maxListeners: number): this
  getMaxListeners(): number

  listeners<E extends keyof T>(event: E): T[E][]
  rawListeners<E extends keyof T>(event: E): T[E][]
  listenerCount<E extends keyof T>(event: E): number

  emit<E extends keyof T>(event: E, ...args: Parameters<T[E]>): boolean

  prependListener<E extends keyof T>(event: E, listener: T[E]): this
  prependOnceListener<E extends keyof T>(event: E, listener: T[E]): this

  eventNames(): (keyof T | string | symbol)[]
}

export const TypedEventEmitter = EventEmitter as {
  new <T extends EventMap>(): TypedEventEmitter<T>
}

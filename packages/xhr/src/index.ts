/* eslint-disable  @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-function-return-type */
import type {
  XHRInstance,
  XHRDefaults,
  XHRRequestOptions,
  XHRResponse
} from './types'
import { request } from './xhr'

export * from './types'

export class XHR implements XHRInstance {
  defaults: XHRDefaults = {}

  constructor(defaults?: XHRDefaults) {
    this.defaults = { ...defaults }
  }

  private mergeDefaults(defaults?: XHRRequestOptions): XHRRequestOptions {
    return { ...this.defaults, ...defaults }
  }

  post<T = any>(
    url: string,
    data?: any,
    options?: XHRRequestOptions
  ): Promise<XHRResponse<T>> {
    return request<T>('POST', url, data, this.mergeDefaults(options))
  }

  get<T = any>(
    url: string,
    options?: XHRRequestOptions
  ): Promise<XHRResponse<T>> {
    return request<T>('GET', url, null, this.mergeDefaults(options))
  }

  delete<T = any>(
    url: string,
    options?: XHRRequestOptions
  ): Promise<XHRResponse<T>> {
    return request<T>('DELETE', url, null, this.mergeDefaults(options))
  }

  put<T = any>(
    url: string,
    data?: any,
    options?: XHRRequestOptions
  ): Promise<XHRResponse<T>> {
    return request<T>('PUT', url, data, this.mergeDefaults(options))
  }

  head<T = any>(
    url: string,
    options?: XHRRequestOptions
  ): Promise<XHRResponse<T>> {
    return request<T>('HEAD', url, null, this.mergeDefaults(options))
  }

  options<T = any>(
    url: string,
    options?: XHRRequestOptions | undefined
  ): Promise<XHRResponse<T>> {
    return request<T>('OPTIONS', url, null, this.mergeDefaults(options))
  }
}

const xhr = new XHR()

export default xhr

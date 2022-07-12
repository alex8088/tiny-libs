/* eslint-disable  @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-function-return-type */
export type XHRMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'HEAD' | 'OPTIONS'

export interface XHRRequestOptions {
  params?: any
  headers?: {
    [key: string]: string
  }
  timeout?: number
  withCredentials?: boolean
  responseType?: XHRResponseType
  auth?: XHRCredentials
}

export type XHRResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'

export interface XHRCredentials {
  username: string
  password: string
}

export interface XHRResponse<T = unknown> {
  data: T
  status: number
  statusText: string
}

export interface XHRInstance {
  post<T = any>(
    url: string,
    data?: any,
    options?: XHRRequestOptions
  ): Promise<XHRResponse<T>>
  get<T = any>(
    url: string,
    options?: XHRRequestOptions
  ): Promise<XHRResponse<T>>
  delete<T = any>(
    url: string,
    options?: XHRRequestOptions
  ): Promise<XHRResponse<T>>
  put<T = any>(
    url: string,
    data?: any,
    options?: XHRRequestOptions
  ): Promise<XHRResponse<T>>
  head<T = any>(
    url: string,
    options?: XHRRequestOptions
  ): Promise<XHRResponse<T>>
  options<T = any>(
    url: string,
    options?: XHRRequestOptions
  ): Promise<XHRResponse<T>>
}

export type XHRDefaults = Omit<XHRRequestOptions, 'params'>

/* eslint-disable  @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-function-return-type */
import {
  isObject,
  isBlob,
  isFile,
  isStream,
  isBuffer,
  isArrayBuffer,
  isFormData,
  isURLSearchParams
} from './utils'

import type { XHRMethod, XHRRequestOptions, XHRResponse } from './types'

export const request = async function <T>(
  method: XHRMethod,
  url: string,
  data: any,
  options: XHRRequestOptions
): Promise<XHRResponse<T>> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = () => {
      if (xhr.status === 200) {
        let data =
          !options.responseType || options.responseType === 'text'
            ? xhr.responseText
            : xhr.response
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data)
          } catch (e) {
            if (options.responseType === 'json') {
              throw e
            }
          }
        }

        resolve({
          data,
          status: xhr.status,
          statusText: xhr.statusText
        })
      } else {
        reject(new Error(`Request failed with status code ${xhr.status}`))
      }
    }

    xhr.onerror = () => {
      reject(new Error('Network Error'))
    }

    xhr.ontimeout = () => {
      reject(new Error('Timeout'))
    }

    let _url = url
    if (method === 'GET') {
      let qs = ''
      if (options.params && typeof options.params === 'object') {
        qs = Object.keys(options.params)
          .map((key) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(
              options.params[key]
            )}`
          })
          .join(`&`)
      }

      _url = `${url}?${qs}`
    }

    xhr.open(method, _url, true, options.auth?.username, options.auth?.password)

    if (options.timeout && options.timeout > 0) {
      xhr.timeout = options.timeout
    }

    xhr.withCredentials = !!options.withCredentials

    if (options.responseType) {
      xhr.responseType = options.responseType
    }

    let body
    options.headers = {
      ...{ Accept: 'application/json, text/plain, */*' },
      ...options.headers
    }

    if (method !== 'GET' && method !== 'HEAD' && isObject(data)) {
      if (
        isFormData(data) ||
        isBuffer(data) ||
        isArrayBuffer(data) ||
        isStream(data) ||
        isFile(data) ||
        isBlob(data)
      ) {
        body = data
      } else if (isURLSearchParams(data)) {
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        body = data.toString()
      } else {
        options.headers['Content-Type'] = 'application/json'
        body = JSON.stringify(data)
      }
    }

    const headers = options.headers
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key])
    })

    xhr.send(body || null)
  })
}

# @tiny-libs/xhr

Tiny HTTP client for the browser.

## Motivation

We love [axios](https://github.com/axios/axios), but not very small. `xhr` is extremely small, and about 10% size of the `axios`.

Great if you don't need intercept and cancel features. You can use it like axios.

## Features

- XMLHttpRequest based
- Promise based
- Transform request and response data
- Automatic transforms for JSON data
- Written in TypeScript

## Install

```sh
npm i @tiny-libs/xhr
```

## Usage

```js
import xhr from '@tiny-libs/xhr'

xhr.get('/users').then((res) => {
  console.log(res.data)
})
```

## API

### Post

Type Signature:

```js
post<T = any>(url: string, data?: any, options?: XHRRequestOptions): Promise<XHRResponse<T>>
```

### Get

Type Signature:

```js
get<T = any>(url: string, options?: XHRRequestOptions): Promise<XHRResponse<T>>
```

### Delete

Type Signature:

```js
delete<T = any>(url: string, data?: any, options?: XHRRequestOptions): Promise<XHRResponse<T>>
```

### Put

Type Signature:

```js
put<T = any>(url: string, data?: any, options?: XHRRequestOptions): Promise<XHRResponse<T>>
```

### Head

Type Signature:

```js
head<T = any>(url: string, options?: XHRRequestOptions): Promise<XHRResponse<T>>
```

### Options

Type Signature:

```js
options<T = any>(url: string, options?: XHRRequestOptions): Promise<XHRResponse<T>>
```

## Request Options

Type Signature:

```js
interface XHRRequestOptions {
  params?: any
  headers?: {
    [key: string]: string
  }
  timeout?: number
  withCredentials?: boolean
  responseType?: XHRResponseType
  auth?: XHRCredentials
}
```

Example:

```js
{
  params: {
    id: '1'
  },
  headers: {
    'Content-Type': 'applcation/json'
  },
  timeout: 2000,
  withCredentials: false
  responseType: 'json',
  auth: {
    name: 'admin'
    password: '123456'
  }
}
```

## Response Schema

Type Signature:

```js
interface XHRResponse<T = unknown> {
  data: T
  status: number
  statusText: string
}
```

Example:

```js
{
  data: {},
  status: 200,
  statusText: 'OK'
}
```

## Config Defaults

You can specify config defaults that will be applied to every request.

```js
import { XHR } from '@tiny-libs/xhr'

const defaults = {
  headers: {
    'Content-Type': 'applcation/json'
  },
  timeout: 10000
}

const instance = new XHR(defaults)

instance.post('/post', { value: '' }).then((res) => {
  console.log(res.data)
})
```

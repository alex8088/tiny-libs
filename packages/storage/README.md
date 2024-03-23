# @tiny-libs/storage

Tiny serializable web storage library. Support `localStorage` and `sessionStorage`.

## Features

- Automatic serialization and deserialization
- Type-safe

## Install

```sh
npm i @tiny-libs/storage
```

## Usage

### localStorage

```ts
import { useLocalStorage } from '@tiny-libs/storage'

const storage = useLocalStorage('key', {})

storage.set({ hello: 'hi', greeting: 'hello' })

const obj = storage.get()

console.log(obj.greeting) // 'hello'
```

### sessionStorage

```ts
import { useSessionStorage } from '@tiny-libs/storage'

const storage = useSessionStorage('key', 1)

console.log(storage.get()) // 1

storage.set(2)
storage.set(null) // clear storage

console.log(storage.get()) // 1
```

## License

[MIT](./LICENSE) copyright © 2024-present alex wei

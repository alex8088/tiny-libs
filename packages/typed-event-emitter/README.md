# @tiny-libs/typed-event-emitter

Tiny type-safe event emitter for Node.js.

## No Implementation

No implementation, just re-export renamed `EventEmitter` with customized typings.

## Install

```sh
npm i @tiny-libs/typed-event-emitter
```

## Usage

```ts
import { TypedEventEmitter } from '@tiny-libs/typed-event-emitter'

type MyEvents = {
  connected: () => void
  error: (code: string, error: Error) => void
}

class MyClass extends TypedEventEmitter<MyEvents> {
  // ...
}
```

## Related

- [tiny-typed-emitter](https://github.com/binier/tiny-typed-emitter)
- [typed-emitter](https://github.com/andywer/typed-emitter)

## License

[MIT](./LICENSE) copyright © 2023-present alex wei

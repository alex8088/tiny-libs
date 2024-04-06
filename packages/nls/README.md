# @tiny-libs/nls

Tiny internationalization library. Inspired by [vscode-nls](https://github.com/microsoft/vscode-nls).

## Features

- No dependencies
- Crazy fast
- Support Node.js and browser
- ESM support

## Install

```sh
npm i @tiny-libs/nls
```

## Usage

```ts
import nls from '@tiny-libs/nls'

const messages = {
  'say.hello': '你好, {0}',
  say: {
    yes: '好的, {0}'
  }
}

const localize = nls.loadMessages(messages)

console.log(localize('hello.world', 'Hello World')) // Output: Hello World
console.log(localize('say.hello', 'Hello, {0}', 'Alex')) // Output: 你好, Alex
console.log(localize('say.yes', 'Yes, {0}', 'Alex')) // Output: 好的, Alex
```

## License

[MIT](./LICENSE) copyright © 2024-present alex wei

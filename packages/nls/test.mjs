import nls from './dist/index.mjs'

const messages = {
  'say.hello': '你好, {0}'
}

const localize = nls.loadMessages(messages)

console.log(localize('hello.world', 'Hello World'))
console.log(localize('say.hello', 'Hello, {0}', 'Alex'))

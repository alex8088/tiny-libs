import time from './dist/index.mjs'
import zh from './dist/locales/zh-CN.mjs'

time.locale('zh-CN', zh)

const d = time.add(new Date(), -1, 'minute')

console.log(time.format(d, 'YYYY年MM月DD ddd HH:mm:ss'))

console.log(time.format(time.startOf(new Date(), 'week')))

console.log(time.format(time.endOf(new Date(), 'week')))

console.log(time.isSame(d, new Date(), 'hour'))

console.log(time.fromNow(d))

console.log(time.socialize(new Date(d)))

import { solar2lunar } from './dist/index.mjs'

console.log(solar2lunar(2023, 3, 5))

console.log(solar2lunar(2024, 1, 4, { ganzhi: true, zodiac: true }))

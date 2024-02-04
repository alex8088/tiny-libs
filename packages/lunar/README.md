# @tiny-libs/lunar

Tiny lunar calendar conversion tool. It's minimal and fast.

## Features

- Solar calendar to lunar calendar
- Caching to improve performance
- Customized return results
- ESM support

## Install

```sh
npm i @tiny-libs/lunar
```

## Usage

### Default

```js
import { solar2lunar } from '@tiny-libs/lunar'

solar2lunar(2023, 3, 5) // 2023-04-05
```

output:

```json
{
  "year": 2023,
  "month": 1,
  "day": 15,
  "leapMonth": true,
  "monthName": "闰二",
  "dayName": "十五",
  "term": "清明"
}
```

### Customizing

```js
import { solar2lunar } from '@tiny-libs/lunar'

solar2lunar(2024, 1, 4, { ganzhi: true, zodiac: true }) // 2024-02-04
```

output:

```json
{
  "year": 2023,
  "month": 11,
  "day": 25,
  "leapMonth": false,
  "monthName": "十二",
  "dayName": "廿五",
  "term": "立春",
  "ganzhi": { "year": "癸卯", "month": "丙寅", "day": "戊戌" },
  "zodiac": "兔"
}
```

## Alternatives

`@tiny-libs/lunar` is inspired by the following tools.

- [LunarCalendar](https://github.com/zzyss86/LunarCalendar)
- [calendar.js](https://github.com/jjonline/calendar.js)

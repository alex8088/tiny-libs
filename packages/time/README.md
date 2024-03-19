# @tiny-libs/time

Tiny date/time formatting library. Inspired by [Day.js](https://github.com/iamkun/dayjs) and [Moment.js](https://github.com/moment/moment).

## Features

- No chaining
- Only practical APIs
- Minimal and fast
- Support Node.js and browser
- ESM support

## Install

```bash
npm i @tiny-libs/time
```

## Usage

```js
import time from '@tiny-libs/time'

time.format(new Date(), 'YYYY/MM/DD HH:mm')
```

### APIs

#### format

Format date/time.

- Type Signature:

  ```js
  function format(date: Date, formatStr?: string): string
  ```

- Example Usage:

  ```js
  time.format(new Date(2024, 3, 19), 'YYYY-MM-DD') // 2024-03-19
  ```

  List of formats

  | Format | Output           | Description                           |
  | ------ | ---------------- | ------------------------------------- |
  | `YY`   | 24               | Two-digit year                        |
  | `YYYY` | 2024             | Four-digit year                       |
  | `M`    | 1-12             | The month, beginning at 1             |
  | `MM`   | 01-12            | The month, 2-digits                   |
  | `MMM`  | Jan-Dec          | The abbreviated month name            |
  | `MMMM` | January-December | The full month name                   |
  | `D`    | 1-31             | The day of the month                  |
  | `DD`   | 01-31            | The day of the month, 2-digits        |
  | `d`    | 0-6              | The day of the week, with Sunday as 0 |
  | `dd`   | Su-Sa            | The min name of the day of the week   |
  | `ddd`  | Sun-Sat          | The short name of the day of the week |
  | `dddd` | Sunday-Saturday  | The name of the day of the week       |
  | `H`    | 0-23             | The hour                              |
  | `HH`   | 00-23            | The hour, 2-digits                    |
  | `h`    | 1-12             | The hour, 12-hour clock               |
  | `hh`   | 01-12            | The hour, 12-hour clock, 2-digits     |
  | `m`    | 0-59             | The minute                            |
  | `mm`   | 00-59            | The minute, 2-digits                  |
  | `s`    | 0-59             | The second                            |
  | `ss`   | 00-59            | The second, 2-digits                  |
  | `SSS`  | 000-999          | The millisecond, 3-digits             |
  | `Z`    | +05:00           | The offset from UTC, ±HH:mm           |
  | `ZZ`   | +0500            | The offset from UTC, ±HHmm            |
  | `A`    | AM PM            |                                       |
  | `a`    | am pm            |                                       |

#### add

Clone a date object with a specified amount of time added.

- Type Signature:

  ```js
  function add(date: Date, num: number, unit: TimeUnit): Date
  ```

  Time Unit: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

- Example Usage:

  ```js
  time.add(new Date(), -1, 'day')
  ```

#### startOf

Clone a date object and set it to the start of the time unit.

- Type Signature:

  ```js
  function startOf(date: Date, unit?: TimeUnit): Date
  ```

- Example Usage:

  ```js
  time.startOf(new Date(), 'day')
  ```

#### endOf

Clone a date object and set it to the end of the time unit.

- Type Signature:

  ```js
  function endOf(date: Date, unit?: TimeUnit): Date
  ```

- Example Usage:

  ```js
  time.endOf(new Date(), 'day')
  ```

#### isSame

Compares two dates for equality in specified exact units.

- Type Signature:

  ```js
  function isSame(date1: Date, date2: Date, unit?: TimeUnit): boolean
  ```

- Example Usage:

  ```js
  const date = time.add(new Date(), -1, 'minute')

  time.isSame(date, new Date(), 'hour') // true
  ```

#### clone

Clone for specified date object.

- Type Signature:

  ```js
  function clone(date: Date | number): Date
  ```

#### from

Returns the string of relative time from now.

- Type Signature:

  ```js
  function fromNow(date: number | Date, withoutAffix?: boolean, allowNow?: boolean): string
  ```

- Example Usage:

  ```js
  const d1 = time.add(new Date(), -1, 'minute')
  const d2 = time.add(new Date(), 1, 'hour')

  time.fromNow(d1) // 1 minute ago
  time.fromNow(d2) // in 1 hour
  ```

  The base strings are localized by the current locale and can be customized with the `relativeTime` locale object.

#### socialize

Returns the social style date/time string of relative time from now.

- Type Signature:

  ```js
  function socialize(date: Date | number, displayHourMinute?: boolean): string
  ```

- Example Usage:

  ```js
  const d1 = new Date()
  const d2 = time.add(new Date(), 1, 'day')
  const d3 = time.add(new Date(), 2, 'day')

  time.socialize(d1) // 22:00
  time.socialize(d2) // Yesterday
  time.socialize(d3) // Monday 22:00
  ```

  | Range                                      | Key                       | Sample Output    |
  | ------------------------------------------ | ------------------------- | ---------------- |
  | Today                                      | LT                        | 22:00            |
  | Yesterday                                  | Yesterday \| Yesterday LT | Yesterday 22:00  |
  | From this week to the day before yesterday | LW \| LWT                 | wed 22:00        |
  | This year                                  | LDM \| LDMT               | 11/12 22:00      |
  | Before this year                           | LDMY \| LDMYT             | 11/12/2024 22:00 |

  These strings are localized, and can be customized with the `formats` locale object.

### I18n

Built-in `en-US` and `zh-CN` locales. You can customize the locale by following other locale object [templates](./src/locales).

```js
import time from '@tiny-libs/time'
import zh from '@tiny-libs/time/zh'

time.locale('zh-CN', zh)
```

## License

[MIT](./LICENSE) copyright © 2024-present alex wei

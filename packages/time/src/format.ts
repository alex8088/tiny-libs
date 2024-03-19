import { getLocale } from './locale'
import { padLeftNum } from './utils'

const FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZZ'
const REGEX_FORMAT =
  /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g

export function format(date: Date, formatStr = FORMAT_DEFAULT): string {
  const locale = getLocale()

  const { weekdays, weekdaysMin, weekdaysShort, months, monthsShort } = locale

  const short = (
    arr: string[] | undefined | null,
    index: number,
    full: string[],
    length
  ): string => (arr && arr[index]) || full[index].slice(0, length)

  const matches = (match: string): string | null => {
    switch (match) {
      case 'YY':
        return String(date.getFullYear()).slice(-2)
      case 'YYYY':
        return padLeftNum(date.getFullYear())
      case 'M':
        return String(date.getMonth() + 1)
      case 'MM':
        return padLeftNum(date.getMonth() + 1)
      case 'MMM':
        return short(monthsShort, date.getMonth() + 1, months, 3)
      case 'MMMM':
        return months[date.getMonth() + 1]
      case 'D':
        return String(date.getDate())
      case 'DD':
        return padLeftNum(date.getDate())
      case 'd':
        return String(date.getDay())
      case 'dd':
        return short(weekdaysMin, date.getDay(), weekdays, 2)
      case 'ddd':
        return short(weekdaysShort, date.getDay(), weekdays, 2)
      case 'dddd':
        return weekdays[date.getDay()]
      case 'H':
        return String(date.getHours())
      case 'HH':
        return padLeftNum(date.getHours())
      case 'h':
        return String(date.getHours() % 12)
      case 'hh':
        return padLeftNum(date.getHours() % 12)
      case 'a':
      case 'A': {
        const meridiemFunc =
          locale.meridiem ||
          ((hour, _, isLower): string => {
            const m = hour < 12 ? 'AM' : 'PM'
            return isLower ? m.toLowerCase() : m
          })
        return meridiemFunc(date.getHours(), date.getMinutes(), match === 'a')
      }
      case 'm':
        return String(date.getMinutes())
      case 'mm':
        return padLeftNum(date.getMinutes())
      case 's':
        return String(date.getSeconds())
      case 'ss':
        return padLeftNum(date.getSeconds())
      case 'SSS':
        return padLeftNum(date.getMilliseconds(), 3)
      case 'Z':
      case 'ZZ': {
        const zoneFunc = (d: Date, timezone: boolean): string => {
          const negMinutes = Math.round(d.getTimezoneOffset() / 15) * 15
          const minutes = Math.abs(negMinutes)
          const hourOffset = Math.floor(minutes / 60)
          const minuteOffset = minutes % 60
          return `${negMinutes <= 0 ? '+' : '-'}${padLeftNum(hourOffset)}${
            timezone ? ':' : ''
          }${padLeftNum(minuteOffset)}`
        }
        return zoneFunc(date, match === 'Z')
      }
      default:
        break
    }

    return null
  }

  return formatStr.replace(REGEX_FORMAT, (match, $1) => $1 || matches(match))
}

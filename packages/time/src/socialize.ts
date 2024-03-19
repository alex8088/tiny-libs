import { getLocale } from './locale'
import { format } from './format'

export function socialize(
  date: Date | number,
  displayHourMinute = false
): string {
  if (typeof date === 'number') {
    date = new Date(date)
  }

  const locale = getLocale()

  const { formats, yesterday } = locale

  const now = new Date()
  const zoc = now.setHours(0, 0, 0, 0) / 1000

  const seconds = date.getTime() / 1000

  if (seconds > zoc) {
    return format(date, formats.LT)
  }
  if (seconds > zoc - 60 * 60 * 24) {
    return yesterday + (displayHourMinute ? ' ' + format(date, formats.LT) : '')
  }
  const nowDay = now.getDay() || 7
  const day = date.getDay() || 7
  if (nowDay > day) {
    return format(date, displayHourMinute ? formats.LWT : formats.LW)
  }
  const nowYear = now.getFullYear()
  const year = date.getFullYear()
  if (nowYear === year) {
    return format(date, displayHourMinute ? formats.LDMT : formats.LDM)
  } else {
    return format(date, displayHourMinute ? formats.LDMYT : formats.LDMY)
  }
}

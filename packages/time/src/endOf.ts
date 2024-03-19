import { getLocale } from './locale'
import { clone } from './clone'
import type { TimeUnit } from './types'

/**
 * Ending time of the specified time unit
 */
export function endOf(date: Date, unit: TimeUnit = 'day'): Date {
  const d = clone(date)
  if (unit === 'second') {
    d.setMilliseconds(999)
  }
  if (unit === 'minute') {
    d.setSeconds(59, 999)
  }
  if (unit === 'hour') {
    d.setMinutes(59, 59, 999)
  }
  if (unit === 'day') {
    d.setHours(23, 59, 59, 999)
  }
  if (unit === 'week') {
    const day = d.getDay()
    const weekStart = getLocale().weekStart || 0
    const gap = (day < weekStart ? day + 7 : day) - weekStart
    d.setDate(date.getDate() + (6 - gap))
    d.setHours(23, 59, 59, 999)
  }
  if (unit === 'month') {
    d.setMonth(d.getMonth() + 1)
    d.setDate(1)
    d.setHours(23, 59, 59, 999)
    d.setDate(-1)
    return d
  }
  if (unit === 'year') {
    d.setFullYear(d.getFullYear() + 1)
    d.setMonth(0)
    d.setDate(1)
    d.setHours(23, 59, 59, 999)
    d.setDate(-1)
    return d
  }
  return d
}

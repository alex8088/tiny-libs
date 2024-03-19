import { getLocale } from './locale'
import { clone } from './clone'
import type { TimeUnit } from './types'

/**
 * Starting time of the specified time unit
 */
export function startOf(date: Date, unit: TimeUnit = 'day'): Date {
  const d = clone(date)
  if (unit === 'second') {
    d.setMilliseconds(0)
  }
  if (unit === 'minute') {
    d.setSeconds(0, 0)
  }
  if (unit === 'hour') {
    d.setMinutes(0, 0, 0)
  }
  if (unit === 'day') {
    d.setHours(0, 0, 0, 0)
  }
  if (unit === 'week') {
    const day = d.getDay()
    const weekStart = getLocale().weekStart || 0
    const gap = (day < weekStart ? day + 7 : day) - weekStart
    d.setDate(d.getDate() - gap)
    d.setHours(0, 0, 0, 0)
  }
  if (unit === 'month') {
    d.setDate(1)
    d.setHours(0, 0, 0, 0)
  }
  if (unit === 'year') {
    d.setMonth(0)
    d.setDate(1)
    d.setHours(0, 0, 0, 0)
  }
  return d
}

import { clone } from './clone'
import type { TimeUnit } from './types'

export function add(date: Date, num: number, unit: TimeUnit): Date {
  const d = clone(date)
  if (unit === 'second') {
    d.setSeconds(date.getSeconds() + num)
  }
  if (unit === 'minute') {
    d.setMinutes(date.getMinutes() + num)
  }
  if (unit === 'hour') {
    d.setHours(date.getHours() + num)
  }
  if (unit === 'day') {
    d.setDate(date.getDate() + num)
  }
  if (unit === 'week') {
    d.setDate(date.getDate() + num * 7)
  }
  if (unit === 'month') {
    d.setMonth(date.getMonth() + num)
  }
  if (unit === 'year') {
    d.setFullYear(date.getFullYear() + num)
  }
  return d
}

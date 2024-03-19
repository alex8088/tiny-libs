import { startOf } from './startOf'
import { endOf } from './endOf'
import type { TimeUnit } from './types'

export function isSame(
  date1: Date,
  date2: Date,
  unit: TimeUnit = 'day'
): boolean {
  return startOf(date1, unit) <= date2 && date2 <= endOf(date1, unit)
}

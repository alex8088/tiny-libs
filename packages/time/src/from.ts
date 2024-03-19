import { secondDiff } from './utils'
import { getLocale } from './locale'

import type { RelativeTimeLocaleKey } from './types'

function formatRelativeTime(
  key: RelativeTimeLocaleKey,
  diff: number,
  affix?: 'future' | 'past'
): string {
  const locale = getLocale().relativeTime
  let output = locale[key]
  if (affix) {
    output = locale[affix].replace('%s', output)
  }
  return output.replace('%d', diff.toString())
}

const minute = 60
const hour = minute * 60
const day = hour * 24
const week = day * 7
const month = day * 30
const year = day * 365

export function fromNow(
  date: number | Date,
  withoutAffix = false,
  allowNow = true
): string {
  const diff = secondDiff(date)
  const seconds = Math.abs(diff)

  const affix = !withoutAffix ? (diff < 0 ? 'future' : 'past') : undefined

  if (seconds < 30 && allowNow) {
    return getLocale().relativeTime[diff > 0 ? 'justNow' : 'rightNow'] || ''
  }

  let value: number
  if (seconds < minute) {
    value = seconds
    return formatRelativeTime(value <= 1 ? 's' : 'ss', value, affix)
  }
  if (seconds < hour) {
    value = Math.floor(seconds / minute)
    return formatRelativeTime(value === 1 ? 'm' : 'mm', value, affix)
  }
  if (seconds < day) {
    value = Math.floor(seconds / hour)
    return formatRelativeTime(value === 1 ? 'h' : 'hh', value, affix)
  }
  if (seconds < week) {
    value = Math.floor(seconds / day)
    return formatRelativeTime(value === 1 ? 'd' : 'dd', value, affix)
  }
  if (seconds < month) {
    value = Math.floor(seconds / week)
    return formatRelativeTime(value === 1 ? 'w' : 'ww', value, affix)
  }
  if (seconds < year) {
    value = Math.floor(seconds / month)
    return formatRelativeTime(value === 1 ? 'M' : 'MM', value, affix)
  }

  value = Math.floor(seconds / year)
  return formatRelativeTime(value === 1 ? 'y' : 'yy', value, affix)
}

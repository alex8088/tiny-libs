/* eslint-disable  @typescript-eslint/no-explicit-any */

export function isObject(value: unknown): value is Record<string, any> {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * @returns the diff seconds between the date and now
 */
export function secondDiff(date: Date | number): number {
  if (typeof date !== 'number') {
    date = date.getTime()
  }
  return Math.round((new Date().getTime() - date) / 1000)
}

/**
 * @param num number to string
 * @param len default: 2
 */
export function padLeftNum(num: number, len = 2): string {
  return String(num).padStart(len, '0')
}

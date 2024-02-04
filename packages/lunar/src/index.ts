import {
  LEAP_MONTH_MAP,
  SPRING_FESTIVAL_DATE_MAP,
  MONTH_MAP,
  MIN_YEAR,
  MAX_YEAR,
  CN_MONTHS,
  CN_DAYS,
  EARTH_REVOLUTION_PERIOD,
  SOLAR_TERM_INTERVALS,
  SOLAR_TERMS,
  HEAVENLY_STEMS,
  EARTHLY_BRANCHES,
  ZODIAC
} from './constants'

import type { Lunar, LunarDate, LunarOptions, TermInfo, Ganzhi } from './types'

export function solar2lunar(
  year: number,
  month: number,
  day: number,
  options?: LunarOptions
): Lunar | null {
  if (year < MIN_YEAR || year > MAX_YEAR) return null

  const { ganzhi = false, zodiac = false } = options || {}

  const lunarDate = getLunarDate(year, month, day)

  const monthName = `${lunarDate.leapMonth ? '闰' : ''}${
    CN_MONTHS[lunarDate.month]
  }`
  const dayName = CN_DAYS[lunarDate.day - 1]

  const termInfo =
    getTerm(year, month * 2 + (day < 15 ? 0 : 1)) ||
    getTerm(year, month * 2 + (day < 15 ? 1 : 0))

  const term = termInfo.day === day ? SOLAR_TERMS[termInfo.n] : ''

  return {
    ...lunarDate,
    monthName,
    dayName,
    term,
    ...(ganzhi ? { ganzhi: getGanzhi(lunarDate, year, month, day) } : null),
    ...(zodiac ? { zodiac: getZodiac(lunarDate) } : null)
  }
}

const lunarDateCache = new Map<string, LunarDate>()

function getLunarDate(year: number, month: number, day: number): LunarDate {
  const cacheKey = `${year}-${month}-${day}`
  if (lunarDateCache.has(cacheKey)) return lunarDateCache.get(cacheKey)!

  // 计算农历年份
  const sd = SPRING_FESTIVAL_DATE_MAP[year - MIN_YEAR]
  const diff = Date.UTC(year, month, day) - Date.UTC(year, sd[0] - 1, sd[1])
  const diffDays = diff / 86400000
  const lunarYear = diffDays >= 0 ? year : year - 1

  // 计算当前农历年总天数
  const leapMonth = LEAP_MONTH_MAP[lunarYear - MIN_YEAR]
  const monthMap = MONTH_MAP[lunarYear - MIN_YEAR]
  const mm = monthMap.substring(0, leapMonth > 0 ? 13 : 12)
  const monthDays: number[] = Array.from(mm).map((b) => (b === '1' ? 30 : 29))
  const yearDays: number = monthDays.reduce((prev, curr) => prev + curr)

  // 计算当前农历日期
  const currentDays = diffDays > 0 ? diffDays : yearDays + diffDays
  let tempDays = 0
  let lunarMonth = 0
  for (let i = 0; i < monthDays.length; i++) {
    const days = monthDays[i]
    if (tempDays + days > currentDays) {
      lunarMonth = i
      break
    }
    tempDays += days
  }
  const lunarDay = currentDays - tempDays + 1

  const date = {
    year: lunarYear,
    month: leapMonth && lunarMonth >= leapMonth ? lunarMonth - 1 : lunarMonth,
    day: lunarDay,
    leapMonth: leapMonth > 0 && lunarMonth === leapMonth
  }

  lunarDateCache.set(cacheKey, date)

  return date
}

const termInfoCache = new Map<string, TermInfo>()

function getTerm(year: number, n: number): TermInfo {
  const cacheKey = `${year}-${n}`
  if (termInfoCache.has(cacheKey)) return termInfoCache.get(cacheKey)!

  // 以1890年小寒为基准点，计算第n个节气（1890年小寒时刻：01-05 16:02:31）
  const date = new Date(
    EARTH_REVOLUTION_PERIOD * (year - MIN_YEAR) +
      SOLAR_TERM_INTERVALS[n] * 1000 +
      Date.UTC(1890, 0, 5, 16, 2, 31)
  )

  const info = {
    n,
    day: date.getUTCDate()
  }

  termInfoCache.set(cacheKey, info)

  return info
}

function getGanzhi(
  lunarDate: LunarDate,
  year: number,
  month: number,
  day: number
): Ganzhi {
  const ganzhi = (offset: number): string => {
    return `${HEAVENLY_STEMS[offset % 10]}${EARTHLY_BRANCHES[offset % 12]}`
  }

  // 计算干支纪年, 农历年减3, 取10余数是天干, 取12余数便是地支
  const gan = HEAVENLY_STEMS[((lunarDate.year - 3) % 10 || 10) - 1]
  const zhi = EARTHLY_BRANCHES[((lunarDate.year - 3) % 12 || 12) - 1]
  const gzYear = gan + zhi

  // 计算干支纪月, 1890小寒前干支纪月为丙子, 在60进制中排12, 依此推导
  const term = getTerm(year, month * 2)
  const m = day >= term.day ? month + 1 : month
  const gzMonth = ganzhi((year - MIN_YEAR) * 12 + m + 12)

  // 计算干支纪日, 1890/1/1与1970/1/1相差29219日, 1890/1/1日柱为壬午日(60进制18)
  const gzDay = ganzhi(Date.UTC(year, month, day) / 86400000 + 29219 + 18)

  return {
    year: gzYear,
    month: gzMonth,
    day: gzDay
  }
}

function getZodiac(lunarDate: LunarDate): string {
  // 计算生肖年, 生肖同地支, 按纪年由地支推导生肖
  return ZODIAC[((lunarDate.year - 3) % 12 || 12) - 1]
}

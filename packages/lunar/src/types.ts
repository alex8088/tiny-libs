export interface Lunar {
  year: number
  month: number
  day: number
  monthName: string
  dayName: string
  leapMonth: boolean
  term: string
  ganzhi?: Ganzhi
  zodiac?: string
}

export interface LunarDate {
  year: number
  month: number
  day: number
  leapMonth: boolean
}

export interface LunarOptions {
  ganzhi: boolean
  zodiac: boolean
}

export interface TermInfo {
  n: number
  day: number
}

export interface Ganzhi {
  year: string
  month: string
  day: string
}

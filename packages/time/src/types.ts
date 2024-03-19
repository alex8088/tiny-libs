export interface Locale {
  weekdays: string[]
  weekdaysShort?: string[]
  weekdaysMin?: string[]
  weekStart?: number
  months: string[]
  monthsShort?: string[]
  formats: Formats
  meridiem?: MeridiemFunc
  yesterday: string
  relativeTime: RelativeTimeLocale
}

export type PartialLocale = Partial<Omit<Locale, 'relativeTime'>> & {
  relativeTime?: Partial<RelativeTimeLocale>
}

export type RelativeTimeLocale = {
  /**
   * @default 'in %s'
   */
  future: string
  /**
   * @default '%s ago'
   */
  past: string
  /**
   * @default 'just now'
   * @description 30 seconds from now
   */
  justNow: string
  /**
   * @default 'right now'
   * @description in 30 seconds
   */
  rightNow: string
  /**
   * @default '1 second'
   */
  s: string
  /**
   * @default '%d seconds'
   */
  ss: string
  /**
   * @default '1 minute'
   */
  m: string
  /**
   * @default '%d minutes'
   */
  mm: string
  /**
   * @default '1 hour'
   */
  h: string
  /**
   * @default '%d hours'
   */
  hh: string
  /**
   * @default '1 day'
   */
  d: string
  /**
   * @default '%d days'
   */
  dd: string
  /**
   * @default '1 week'
   */
  w: string
  /**
   * @default '%d weeks'
   */
  ww: string
  /**
   * @default '1 month'
   */
  M: string
  /**
   * @default '%d months'
   */
  MM: string
  /**
   * @default '1 year'
   */
  y: string
  /**
   * @default '%d years'
   */
  yy: string
}

export interface Formats {
  /**
   * @default 'HH:mm'
   */
  LT: string
  /**
   * @default 'HH:mm:ss'
   */
  LTS: string
  /**
   * @default 'DD/MM'
   */
  LDM: string
  /**
   * @default 'DD/MM/YYYY'
   */
  LDMY: string
  /**
   * @default 'DD/MM HH:mm'
   */
  LDMT: string
  /**
   * @default 'DD/MM/YYYY HH:mm'
   */
  LDMYT: string
  /**
   * @default 'ddd'
   */
  LW: string
  /**
   * @default 'ddd HH:mm'
   */
  LWT: string
  /**
   * @default 'DD/MM ddd HH:mm'
   */
  LDMWT: string
}

export type MeridiemFunc = (
  hours: number,
  minutes: number,
  isLower: boolean
) => string

export type TimeUnit =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year'

export type RelativeTimeLocaleKey = keyof RelativeTimeLocale

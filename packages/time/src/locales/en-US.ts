import type { Locale } from '../types'

const weekdays =
  'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_')

const months =
  'January_February_March_April_May_June_July_August_September_October_November_December'.split(
    '_'
  )

const locale: Locale = {
  weekdays,
  weekStart: 1,
  months,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    LDM: 'DD/MM',
    LDMT: 'DD/MM HH:mm',
    LDMY: 'DD/MM/YYYY',
    LDMYT: 'DD/MM/YYYY HH:mm',
    LW: 'ddd',
    LWT: 'ddd HH:mm',
    LDMWT: 'DD/MM ddd HH:mm'
  },
  yesterday: 'Yesterday',
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    rightNow: 'right now',
    justNow: 'just now',
    s: '1 second',
    ss: '%d seconds',
    m: '1 minute',
    mm: '%d minutes',
    h: '1 hour',
    hh: '%d hours',
    d: '1 day',
    dd: '%d days',
    w: '1 week',
    ww: '%d weeks',
    M: '1 month',
    MM: '%d months',
    y: '1 year',
    yy: '%d years'
  }
}

export default locale

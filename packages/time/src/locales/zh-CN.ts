import type { Locale } from '../types'

const weekdays = '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_')
const weekdaysShort = '周日_周一_周二_周三_周四_周五_周六'.split('_')
const weekdaysMin = '日_一_二_三_四_五_六'.split('_')
const months =
  '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_')
const monthsShort = '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
  '_'
)

const locale: Locale = {
  weekdays,
  weekdaysShort,
  weekdaysMin,
  weekStart: 1,
  months,
  monthsShort,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    LDM: 'M月D日',
    LDMT: 'M月D日 HH:mm',
    LDMY: 'YYYY年M月D日',
    LDMYT: 'YYYY年M月D日 HH:mm',
    LW: 'ddd',
    LWT: 'ddd HH:mm',
    LDMWT: 'M月D日 ddd HH:mm'
  },
  yesterday: '昨天',
  relativeTime: {
    future: '%s后',
    past: '%s前',
    rightNow: '片刻之后',
    justNow: '刚刚',
    s: '1 秒',
    ss: '%d 秒',
    m: '1 分钟',
    mm: '%d 分钟',
    h: '1 小时',
    hh: '%d 小时',
    d: '1 天',
    dd: '%d 天',
    w: '1 周',
    ww: '%d 周',
    M: '1 个月',
    MM: '%d 个月',
    y: '1 年',
    yy: '%d 年'
  }
}

export default locale

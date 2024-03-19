import { locale } from './locale'
import { fromNow } from './from'
import { format } from './format'
import { clone } from './clone'
import { add } from './add'
import { startOf } from './startOf'
import { endOf } from './endOf'
import { isSame } from './isSame'
import { socialize } from './socialize'
export type { Locale, PartialLocale } from './types'

export default {
  locale,
  fromNow,
  socialize,
  format,
  clone,
  add,
  startOf,
  endOf,
  isSame
}

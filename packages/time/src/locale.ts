/* eslint-disable  @typescript-eslint/no-explicit-any */
import en from './locales/en-US'
import { isObject } from './utils'

import type { Locale, PartialLocale } from './types'

const locales: Record<string, Locale> = {
  'en-US': en
}

function mergeLocale(
  defaults: Record<string, any>,
  overrides: Record<string, any>
): Record<string, any> {
  const merged: Record<string, any> = { ...defaults }

  for (const key in overrides) {
    const value = overrides[key]
    if (value == null) {
      continue
    }

    const existing = merged[key]

    if (existing == undefined) {
      merged[key] = value
      continue
    }

    if (isObject(existing) && isObject(value)) {
      merged[key] = mergeLocale(existing, value)
      continue
    }

    merged[key] = value
  }

  return merged
}

let useLang = 'en-US'

export function locale(lang: string, locale: PartialLocale): void {
  if (lang) {
    locales[lang] = mergeLocale(en, locale) as Locale
    useLang = lang
  }
}

export function getLocale(): Locale {
  return locales[useLang]
}

/* eslint-disable  @typescript-eslint/no-explicit-any */

/**
 * Marks a string to be localized. Returns the localized string.
 *
 * @param key The key to use for localizing the string
 * @param message The string to localize
 * @param args The arguments to the string
 *
 * @note `message` can contain `{n}` notation where it is replaced by the nth value in `...args`
 * @example For example, `localize('say.hello', 'hello {0}', name)`
 *
 * @returns string The localized string.
 */
interface LocalizeFunc {
  (
    key: string,
    message: string,
    ...args: (string | number | boolean | undefined | null)[]
  ): string
}

function format(
  message: string,
  args: (string | number | boolean | undefined | null)[]
): string {
  let result: string

  if (args.length === 0) {
    result = message
  } else {
    result = message.replace(/\{(\d+)\}/g, (match, rest) => {
      const index = rest[0]
      const arg = args[index]
      let result = match
      if (typeof arg === 'string') {
        result = arg
      } else if (
        typeof arg === 'number' ||
        typeof arg === 'boolean' ||
        arg === void 0 ||
        arg === null
      ) {
        result = String(arg)
      }
      return result
    })
  }

  return result
}

function findNestedObject(
  obj: Record<string, unknown>,
  key: string
): string | undefined {
  const value = obj[key]

  if (value !== undefined && typeof value === 'string') {
    return value
  }

  const keys = key.split('.')
  let result: string | Record<string, unknown> = obj

  for (const k of keys) {
    if (result[k] !== undefined) {
      result = result[k]
    } else {
      return undefined
    }
  }

  return typeof result === 'string' ? result : undefined
}

function createLocalizeFunc(messages: Record<string, unknown>): LocalizeFunc {
  return function (key: string, message: string, ...args: any[]): string {
    return format(findNestedObject(messages, key) || message, args)
  }
}

function loadMessages(messages: Record<string, unknown> = {}): LocalizeFunc {
  return createLocalizeFunc(messages)
}

export default {
  loadMessages
}

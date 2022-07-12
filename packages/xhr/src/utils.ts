const { toString } = Object.prototype

export const isObject = (val): boolean => {
  return val != null && typeof val === 'object'
}

export const isBlob = (val): boolean => {
  if (typeof Blob === 'undefined') {
    return false
  }
  return val instanceof Blob || toString.call(val) === '[object Blob]'
}

export const isFile = (val): boolean => {
  if (typeof File === 'undefined') {
    return false
  }
  return val instanceof File || toString.call(val) === '[object File]'
}

export const isFormData = (val): boolean => {
  if (typeof FormData === 'undefined') {
    return false
  }
  return val instanceof FormData || toString.call(val) === '[object FormData]'
}

export const isURLSearchParams = (val): boolean => {
  if (typeof URLSearchParams === 'undefined') {
    return false
  }
  return (
    val instanceof URLSearchParams ||
    toString.call(val) === '[object URLSearchParams]'
  )
}

export const isArrayBuffer = (val): boolean => {
  if (typeof ArrayBuffer === 'undefined') {
    return false
  }
  return (
    val instanceof ArrayBuffer || toString.call(val) === '[object ArrayBuffer]'
  )
}

export const isStream = (val): boolean => {
  return isObject(val) && typeof val.pipe === 'function'
}

export const isBuffer = (val): boolean => {
  return (
    val != null &&
    val.constructor != null &&
    typeof val.constructor.isBuffer === 'function' &&
    val.constructor.isBuffer(val)
  )
}

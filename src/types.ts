export const string = (): {
  parse: (val: string) => boolean
} => {
  return {
    parse: (val) => typeof val === 'string',
  }
}

export const number = (): {
  parse: (val: number) => boolean
} => {
  return {
    parse: (val) => typeof val === 'number',
  }
}

export const boolean = (): {
  parse: (val: boolean) => boolean
} => {
  return {
    parse: (val) => typeof val === 'boolean',
  }
}

export const bigInt = (): {
  parse: (val: BigInt) => boolean
} => {
  return {
    parse: (val) => typeof val === 'bigint',
  }
}

export const fn = (): {
  parse: (val: () => any) => boolean
} => {
  return {
    parse: (val) => typeof val === 'function',
  }
}

export const undefined = (): {
  parse: (val?: undefined) => boolean
} => {
  return {
    parse: (val) => typeof val === 'undefined',
  }
}

export const symbol = (): {
  parse: (val: symbol) => boolean
} => {
  return {
    parse: (val) => typeof val === 'symbol',
  }
}

export const object =
  <T extends keyof K, K extends { [k: string | number | symbol]: () => void }>(obj: K) =>
  () => {
    return {
      /* 
      This type-safety should not be needed for production, bc this validation is
      intended to be done from the actual library
      BUT it helps for development and testing 
      AND it shows differences for the decalred PARSING schema and the API-RESPONSE types
      (if used so) 
      */
      parse: (val: { [key in T]: any }) => haveObjSameKeys(obj, val),
    }
  }

/* 
check if objects have same keys
should be already avoided from typescript validation
TODO: maybe could be useful to use this functionality as configurable setting
THINK: turn setting of, if keys should not be strict equal 
*/
const haveObjSameKeys = (obj, val) =>
  [obj, val].every(
    (object) =>
      new Set([obj, val].reduce((keys, object) => keys.concat(Object.keys(object)), [])).size ===
      Object.keys(object).length
  )
    ? parseObj(obj, val)
    : false

const parseObj = (obj, val) =>
  Object.keys(obj).map((k) =>
    isObject(obj[k]) ? parseObj(obj[k], val[k]) : obj[k]().parse(val[k])
  )

const isObject = (obj) => obj != null && obj.constructor.name === 'Object'

export const array = (
  type: 'string' | 'number' | 'boolean' | 'bigInt' | 'empty' | 'any' = 'any'
) => {
  const dic = {
    string: (val: string[]) => val.map((i) => string().parse(i)),
    number: (val: number[]) => val.map((i) => number().parse(i)),
    boolean: (val: boolean[]) => val.map((i) => boolean().parse(i)),
    bigInt: (val: bigint[]) => val.map((i) => bigInt().parse(i)),
    symbol: (val: symbol[]) => val.map((i) => symbol().parse(i)),
    empty: (val: void[]) => val.length === 0,
    any: (val: any[]) => Array.isArray(val),
  }

  return {
    parse: (val) => (Array.isArray(val) ? dic[type](val) : false),
  }
}

export const tuple = () => null

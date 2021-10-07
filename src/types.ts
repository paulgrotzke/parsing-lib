type Primitive = string | number | boolean | bigint

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

// TODO Support NULL

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
      parse: (val: { [key in T]: any }) => (obj && val ? haveObjSameKeys(obj, val) : false),
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
  Object.keys(obj).map((k) => {
    isObject(obj[k]) ? parseObj(obj[k], val[k]) : obj[k]().parse(val[k])
  })

const isObject = (obj) => obj != null && obj.constructor.name === 'Object'

export const array = (
  type: 'string' | 'number' | 'boolean' | 'bigInt' | 'symbol' | 'fn' | 'empty' | 'any' = 'any'
) => {
  const lengthCheck = (val: any[]) => val.length > 0
  const dic = {
    string: (val: string[]) => (lengthCheck(val) ? val.map((i) => string().parse(i)) : false),
    number: (val: number[]) => (lengthCheck(val) ? val.map((i) => number().parse(i)) : false),
    boolean: (val: boolean[]) => (lengthCheck(val) ? val.map((i) => boolean().parse(i)) : false),
    bigInt: (val: bigint[]) => (lengthCheck(val) ? val.map((i) => bigInt().parse(i)) : false),
    symbol: (val: symbol[]) => (lengthCheck(val) ? val.map((i) => symbol().parse(i)) : false),
    fn: (val: ((val?: any) => any)[]) => (lengthCheck(val) ? val.map((i) => fn().parse(i)) : false),
    empty: (val: void[]) => val.length === 0,
    any: (val: any[]) => true,
  }

  return {
    parse: (val: any[]) => (Array.isArray(val) ? dic[type](val) : false),
  }
}

// TODO fix typing valItem should extend i
const isDeepEqual = (i: Primitive, j: Primitive) => i === j
const isTypeEqual = (i, j) => typeof i === typeof j

export const literal = <T extends K, K extends Primitive>(lit: K) => {
  const dic = {
    string: (val: string) => isDeepEqual(lit, val),
    number: (val: number) => isDeepEqual(lit, val),
    boolean: (val: boolean) => isDeepEqual(lit, val),
    bigint: (val: bigint) => isDeepEqual(lit, val),
  }
  return {
    parse: (val: T) => (isTypeEqual(lit, val) ? dic[typeof lit](val) : false),
  }
}

export const tuple = (tup: any[]) => {
  const dic = {
    string: (tupItem: string, valItem: string) => isDeepEqual(tupItem, valItem),
    // TODO check number typing
    number: (tupItem, valItem) => isDeepEqual(tupItem, valItem),
    boolean: (tupItem: boolean, valItem: boolean) => isDeepEqual(tupItem, valItem),
    bigint: (tupItem: bigint, valItem: bigint) => isDeepEqual(tupItem, valItem),
    function: (tupItem: () => any, valItem: () => any) => tupItem.toString() === valItem.toString(),
    symbol: () => true,
    undefined: () => true,
    // NULL CHECKING TODO
    object: (tupItem, valItem) =>
      [tupItem, valItem].every(
        (object) =>
          new Set([tupItem, valItem].reduce((keys, object) => keys.concat(Object.keys(object)), []))
            .size === Object.keys(object).length
      )
        ? parseTupObj(tupItem, valItem)
        : false,
  }

  /* 
  Can not use "normal" object function to parse, because invoking of "normal" object is  
  be done with functional expression. Tuple declaration is done with concret values
  */
  const parseTupObj = (obj, val) =>
    Object.keys(obj).map((k) =>
      isObject(obj[k]) ? parseTupObj(obj[k], val[k]) : obj[k] === val[k]
    )

  const parseTuple = (tup: any[], val: any[]) =>
    tup.map((item, i) => (isTypeEqual(tup[i], val[i]) ? dic[typeof item](tup[i], val[i]) : false))

  return {
    parse: (val: any[]) =>
      Array.isArray(val) && tup.length === val.length ? parseTuple(tup, val) : false,
  }
}

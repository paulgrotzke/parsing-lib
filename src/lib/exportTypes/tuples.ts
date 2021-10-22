import { isTypeEqual, isDeepEqual } from '../utils/equalityChecks'

const isObject = (obj) => obj != null && obj.constructor.name === 'Object'

export const tuple = (
  tup: any[]
): {
  parse: (val: any) => boolean[]
} => {
  const dic = {
    string: (tupItem: string, valItem: string) => isDeepEqual(tupItem, valItem),
    // TODO check number typing
    number: (tupItem, valItem) => isDeepEqual(tupItem, valItem),
    boolean: (tupItem: boolean, valItem: boolean) => isDeepEqual(tupItem, valItem),
    bigint: (tupItem: bigint, valItem: bigint) => isDeepEqual(tupItem, valItem),
    function: (tupItem: () => any, valItem: () => any) => tupItem.toString() === valItem.toString(),
    symbol: () => true,
    undefined: () => true,
    object: (tupItem, valItem) =>
      Array.isArray(tupItem)
        ? objDic['array'](tupItem, valItem)
        : isObject(tupItem)
        ? objDic['object'](tupItem, valItem)
        : objDic['null'](valItem),
  }

  const objDic = {
    array: (tupItem: any[], valItem: any[]) =>
      tupItem.length === valItem.length && tupItem.length === 0
        ? true
        : tupItem.length > 0
        ? parseTuple(tupItem, valItem)
        : false,
    null: (valItem) => valItem === null,
    object: (tupItem, valItem) =>
      [tupItem, valItem].every(
        (object) =>
          new Set([tupItem, valItem].reduce((keys, object) => keys.concat(Object.keys(object)), []))
            .size === Object.keys(object).length
      )
        ? objDic['parseTupObj'](tupItem, valItem)
        : false,
    /* 
      Can not use "normal" object function to parse, because invoking of "normal" object is  
      done with functional expression. Tuple declaration is done with concret values
    */
    parseTupObj: (obj, val) =>
      Object.keys(obj).map((k) =>
        typeof obj[k] === 'object' ? dic['object'](obj[k], val[k]) : obj[k] === val[k]
      ),
  }

  const parseTuple = (tup: any[], val: any[]) =>
    tup.map((item, i) => (isTypeEqual(tup[i], val[i]) ? dic[typeof item](tup[i], val[i]) : false))

  return {
    parse: (val: any[]) =>
      // check if tuple is empty
      Array.isArray(val) && Array.isArray(tup) && tup.length === val.length && tup.length === 0
        ? true
        : tup.length > 0
        ? parseTuple(tup, val)
        : false,
  }
}

import { isTypeEqual, isDeepEqual, haveObjectsSameKeys } from '../utils/checks'

const dic = {
  string: (tupItem: string, valItem: string) => isDeepEqual(tupItem, valItem),
  number: (tupItem, valItem) => isDeepEqual(tupItem, valItem),
  // TODO check number typing
  boolean: (tupItem: boolean, valItem: boolean) => isDeepEqual(tupItem, valItem),
  bigint: (tupItem: bigint, valItem: bigint) => isDeepEqual(tupItem, valItem),
  function: (tupItem: () => any, valItem: () => any) => tupItem.toString() === valItem.toString(),
  symbol: () => true,
  undefined: () => true,
  /* 
    typeof JS object (object, arrays, null, etc.)
  */
  object: (tupItem, valItem) =>
    Array.isArray(tupItem)
      ? objDic['array'](tupItem, valItem)
      : tupItem !== null && tupItem.constructor.name === 'Object'
      ? objDic['object'](tupItem, valItem)
      : objDic['null'](valItem),
}

const objDic = {
  /* 
    recurvsive call original fn 
  */
  array: (tupItem, valItem) => tuple(tupItem).parse(valItem),
  null: (valItem) => valItem === null,
  object: (tupItem, valItem) =>
    haveObjectsSameKeys(tupItem, valItem) ? objDic['parseTupObj'](tupItem, valItem) : false,
  parseTupObj: (obj, val) =>
    /* 
      Cannot use "normal" object function to parse, because invoking of "normal" object is  
      done with functional expression. Tuple declaration is done with concret values.
    */
    Object.keys(obj).map((k) =>
      typeof obj[k] === 'object' ? dic['object'](obj[k], val[k]) : obj[k] === val[k]
    ),
}

const parseTuple = (tup: any[], val: any[]) =>
  /* 
    bc tup & val are of same length, 
    we can use same itarator to compare.
    If both items are of same type, use individuale
    parsing function from objDic.
  */
  tup.map((item, i) => (isTypeEqual(tup[i], val[i]) ? dic[typeof item](tup[i], val[i]) : false))

const isArrLen0 = (tup: any[], val: any[]) =>
  /*
    pre-check if arr length is 0, so return true 
    otherwise if would have returned [true]
  */
  tup.length === 0 ? [true] : parseTuple(tup, val)

export const tuple = (tup: any[]): { parse: (val) => any } => {
  return {
    parse: (val: any[]) =>
      /* 
        check if both args are of type array 
        && of the same length
      */
      Array.isArray(tup) && Array.isArray(val) && tup.length === val.length
        ? isArrLen0(tup, val)
        : false,
  }
}

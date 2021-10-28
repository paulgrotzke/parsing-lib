import { string, number, boolean, bigInt, symbol, fn } from './primitives'

export const array = (
  type: 'string' | 'number' | 'boolean' | 'bigInt' | 'symbol' | 'fn' | 'empty' | 'any' = 'any'
) => {
  const dic = {
    string: (val: string[]) => val.map((i) => string().parse(i)),
    number: (val: number[]) => val.map((i) => number().parse(i)),
    boolean: (val: boolean[]) => val.map((i) => boolean().parse(i)),
    bigInt: (val: bigint[]) => val.map((i) => bigInt().parse(i)),
    symbol: (val: symbol[]) => val.map((i) => symbol().parse(i)),
    fn: (val: ((val?: any) => any)[]) => val.map((i) => fn().parse(i)),
    empty: (val: void[]) => val.length === 0,
    any: (val: any[]) => true,
  }

  const greater0 = (val) => (val.len > 0 ? dic[type](val) : false)

  return {
    arrayParse: (val: any[]) => (Array.isArray(val) ? greater0(val) : false),
    type: type,
  }
}

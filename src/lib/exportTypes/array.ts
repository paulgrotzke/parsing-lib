import { string, number, boolean, bigInt, symbol, fn } from '.'

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

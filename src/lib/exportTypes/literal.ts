import { isTypeEqual, isDeepEqual } from '../utils/checks'
import { Primitive } from './types'

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

import { t } from '../index'

const stringFn = t.string()
test('string validation', () => {
  expect(stringFn.parse('123')).toBe(true)
  //@ts-expect-error
  expect(stringFn.parse()).toBe(false)
  //@ts-expect-error
  expect(stringFn.parse(5)).toBe(false)
  //@ts-expect-error
  expect(stringFn.parse(true)).toBe(false)
  //@ts-expect-error
  expect(stringFn.parse(9007199254740991n)).toBe(false)
  //@ts-expect-error
  expect(stringFn.parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(stringFn.parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(stringFn.parse(undefined)).toBe(false)
  //@ts-expect-error
  expect(stringFn.parse(Symbol())).toBe(false)
})

const numberFn = t.number()
test('number validation', () => {
  expect(numberFn.parse(5)).toBe(true)
  expect(numberFn.parse(-5)).toBe(true)
  expect(numberFn.parse(-0)).toBe(true)
  //@ts-expect-error
  expect(numberFn.parse()).toBe(false)
  //@ts-expect-error
  expect(numberFn.parse('123')).toBe(false)
  //@ts-expect-error
  expect(numberFn.parse(true)).toBe(false)
  //@ts-expect-error
  expect(numberFn.parse(9007199254740991n)).toBe(false)
  //@ts-expect-error
  expect(numberFn.parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(numberFn.parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(numberFn.parse(undefined)).toBe(false)
  //@ts-expect-error
  expect(numberFn.parse(Symbol())).toBe(false)
})

const booleanFn = t.boolean()
test('boolean validation', () => {
  expect(booleanFn.parse(true)).toBe(true)
  expect(booleanFn.parse(false)).toBe(true)
  //@ts-expect-error
  expect(booleanFn.parse()).toBe(false)
  //@ts-expect-error
  expect(booleanFn.parse('123')).toBe(false)
  //@ts-expect-error
  expect(booleanFn.parse(5)).toBe(false)
  //@ts-expect-error
  expect(booleanFn.parse(9007199254740991n)).toBe(false)
  //@ts-expect-error
  expect(booleanFn.parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(booleanFn.parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(booleanFn.parse(undefined)).toBe(false)
  //@ts-expect-error
  expect(booleanFn.parse(Symbol())).toBe(false)
})

const bigIntFn = t.bigInt()
test('bigint validation', () => {
  expect(bigIntFn.parse(BigInt(9007199254740991))).toBe(true)
  //@ts-expect-error
  expect(bigIntFn.parse()).toBe(false)
  //@ts-expect-error
  expect(bigIntFn.parse('123')).toBe(false)
  //@ts-expect-error
  expect(bigIntFn.parse(true)).toBe(false)
  //@ts-expect-error
  expect(bigIntFn.parse(5)).toBe(false)
  //@ts-expect-error
  expect(bigIntFn.parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(bigIntFn.parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(bigIntFn.parse(undefined)).toBe(false)
  //@ts-expect-error
  expect(bigIntFn.parse(Symbol())).toBe(false)
})

const fnFn = t.fn()
test('fn validation', () => {
  expect(fnFn.parse(() => {})).toBe(true)
  //@ts-expect-error
  expect(fnFn.parse()).toBe(false)
  //@ts-expect-error
  expect(fnFn.parse('123')).toBe(false)
  //@ts-expect-error
  expect(fnFn.parse(true)).toBe(false)
  //@ts-expect-error
  expect(fnFn.parse(5)).toBe(false)
  //@ts-expect-error
  expect(fnFn.parse(BigInt(9007199254740991))).toBe(false)
  //@ts-expect-error
  expect(fnFn.parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(fnFn.parse(undefined)).toBe(false)
  //@ts-expect-error
  expect(fnFn.parse(Symbol())).toBe(false)
})

const undefinedFn = t.undefined()
test('undefined validation', () => {
  expect(undefinedFn.parse(undefined)).toBe(true)
  expect(undefinedFn.parse()).toBe(true)
  //@ts-expect-error
  expect(undefinedFn.parse('123')).toBe(false)
  //@ts-expect-error
  expect(undefinedFn.parse(true)).toBe(false)
  //@ts-expect-error
  expect(undefinedFn.parse(5)).toBe(false)
  //@ts-expect-error
  expect(undefinedFn.parse(BigInt(9007199254740991))).toBe(false)
  //@ts-expect-error
  expect(undefinedFn.parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(undefinedFn.parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(undefinedFn.parse(Symbol())).toBe(false)
})

const symbolFn = t.symbol()
test('symbol validation', () => {
  expect(symbolFn.parse(Symbol())).toBe(true)
  expect(symbolFn.parse(Symbol('123'))).toBe(true)
  //@ts-expect-error
  expect(symbolFn.parse()).toBe(false)
  //@ts-expect-error
  expect(symbolFn.parse('123')).toBe(false)
  //@ts-expect-error
  expect(symbolFn.parse(true)).toBe(false)
  //@ts-expect-error
  expect(symbolFn.parse(5)).toBe(false)
  //@ts-expect-error
  expect(symbolFn.parse(BigInt(9007199254740991))).toBe(false)
  //@ts-expect-error
  expect(symbolFn.parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(symbolFn.parse(() => {})).toBe(false)
})

const objFn = t.object({
  stringKey: t.string(),
  numberKey: t.number(),
  booleanKey: t.boolean(),
  bigIntKey: t.bigInt(),
})
test('object validation', () => {
  expect(
    objFn.parse({
      stringKey: '',
      numberKey: 0,
      booleanKey: false,
      bigIntKey: BigInt(9007199254740991),
    })
  ).toStrictEqual([true, true, true, true])
  expect(
    objFn.parse({
      stringKey: '',
      numberKey: '',
      booleanKey: '',
      bigIntKey: '',
    })
  ).toStrictEqual([true, false, false, false])
  expect(objFn.parse({})).toStrictEqual([false, false, false, false])
})

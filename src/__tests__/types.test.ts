import { string, object, number, boolean, bigInt } from '../types'

const stringFn = string()
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
})

const numberFn = number()
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
})

const booleanFn = boolean()
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
})

const bigIntFn = bigInt()
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
})

const objFn = object({
  stringKey: string(),
  numberKey: number(),
  booleanKey: boolean(),
  bigIntKey: bigInt(),
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

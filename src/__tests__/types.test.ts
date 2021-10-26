import { t } from '../lib/index'

const stringFn = t.string
test('string validation', () => {
  expect(stringFn().parse('123')).toBe(true)
  //@ts-expect-error
  expect(stringFn().parse()).toBe(false)
  //@ts-expect-error
  expect(stringFn().parse(5)).toBe(false)
  //@ts-expect-error
  expect(stringFn().parse(true)).toBe(false)
  //@ts-expect-error
  expect(stringFn().parse(1n)).toBe(false)
  //@ts-expect-error
  expect(stringFn().parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(stringFn().parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(stringFn().parse(undefined)).toBe(false)
  //@ts-expect-error
  expect(stringFn().parse(Symbol())).toBe(false)
  //@ts-expect-error
  expect(stringFn().parse(null)).toBe(false)
})

const numberFn = t.number
test('number validation', () => {
  expect(numberFn().parse(5)).toBe(true)
  expect(numberFn().parse(-5)).toBe(true)
  expect(numberFn().parse(-0)).toBe(true)
  //@ts-expect-error
  expect(numberFn().parse()).toBe(false)
  //@ts-expect-error
  expect(numberFn().parse('123')).toBe(false)
  //@ts-expect-error
  expect(numberFn().parse(true)).toBe(false)
  //@ts-expect-error
  expect(numberFn().parse(1n)).toBe(false)
  //@ts-expect-error
  expect(numberFn().parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(numberFn().parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(numberFn().parse(undefined)).toBe(false)
  //@ts-expect-error
  expect(numberFn().parse(Symbol())).toBe(false)
  //@ts-expect-error
  expect(numberFn().parse(null)).toBe(false)
})

const booleanFn = t.boolean
test('boolean validation', () => {
  expect(booleanFn().parse(true)).toBe(true)
  expect(booleanFn().parse(false)).toBe(true)
  //@ts-expect-error
  expect(booleanFn().parse()).toBe(false)
  //@ts-expect-error
  expect(booleanFn().parse('123')).toBe(false)
  //@ts-expect-error
  expect(booleanFn().parse(5)).toBe(false)
  //@ts-expect-error
  expect(booleanFn().parse(1n)).toBe(false)
  //@ts-expect-error
  expect(booleanFn().parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(booleanFn().parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(booleanFn().parse(undefined)).toBe(false)
  //@ts-expect-error
  expect(booleanFn().parse(Symbol())).toBe(false)
  //@ts-expect-error
  expect(booleanFn().parse(null)).toBe(false)
})

const bigIntFn = t.bigInt
test('bigint validation', () => {
  expect(bigIntFn().parse(BigInt(1))).toBe(true)
  //@ts-expect-error
  expect(bigIntFn().parse()).toBe(false)
  //@ts-expect-error
  expect(bigIntFn().parse('123')).toBe(false)
  //@ts-expect-error
  expect(bigIntFn().parse(true)).toBe(false)
  //@ts-expect-error
  expect(bigIntFn().parse(5)).toBe(false)
  //@ts-expect-error
  expect(bigIntFn().parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(bigIntFn().parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(bigIntFn().parse(undefined)).toBe(false)
  //@ts-expect-error
  expect(bigIntFn().parse(Symbol())).toBe(false)
  //@ts-expect-error
  expect(bigIntFn().parse(null)).toBe(false)
})

const fnFn = t.fn
test('fn validation', () => {
  expect(fnFn().parse(() => {})).toBe(true)
  //@ts-expect-error
  expect(fnFn().parse()).toBe(false)
  //@ts-expect-error
  expect(fnFn().parse('123')).toBe(false)
  //@ts-expect-error
  expect(fnFn().parse(true)).toBe(false)
  //@ts-expect-error
  expect(fnFn().parse(5)).toBe(false)
  //@ts-expect-error
  expect(fnFn().parse(BigInt(1))).toBe(false)
  //@ts-expect-error
  expect(fnFn().parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(fnFn().parse(undefined)).toBe(false)
  //@ts-expect-error
  expect(fnFn().parse(Symbol())).toBe(false)
  //@ts-expect-error
  expect(fnFn().parse(null)).toBe(false)
})

const undefinedFn = t.undefined
test('undefined validation', () => {
  expect(undefinedFn().parse(undefined)).toBe(true)
  expect(undefinedFn().parse()).toBe(true)
  //@ts-expect-error
  expect(undefinedFn().parse('123')).toBe(false)
  //@ts-expect-error
  expect(undefinedFn().parse(true)).toBe(false)
  //@ts-expect-error
  expect(undefinedFn().parse(5)).toBe(false)
  //@ts-expect-error
  expect(undefinedFn().parse(BigInt(1))).toBe(false)
  //@ts-expect-error
  expect(undefinedFn().parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(undefinedFn().parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(undefinedFn().parse(Symbol())).toBe(false)
  //@ts-expect-error
  expect(undefinedFn().parse(null)).toBe(false)
})

const symbolFn = t.symbol
test('symbol validation', () => {
  expect(symbolFn().parse(Symbol())).toBe(true)
  expect(symbolFn().parse(Symbol('123'))).toBe(true)
  //@ts-expect-error
  expect(symbolFn().parse()).toBe(false)
  //@ts-expect-error
  expect(symbolFn().parse('123')).toBe(false)
  //@ts-expect-error
  expect(symbolFn().parse(true)).toBe(false)
  //@ts-expect-error
  expect(symbolFn().parse(5)).toBe(false)
  //@ts-expect-error
  expect(symbolFn().parse(BigInt(1))).toBe(false)
  //@ts-expect-error
  expect(symbolFn().parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(symbolFn().parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(symbolFn().parse(null)).toBe(false)
})

const literalFn = t.literal
test('literal validation', () => {
  expect(literalFn('').parse('')).toBe(true)
  //@ts-expect-error
  expect(literalFn('').parse('123')).toBe(false)
  //@ts-ignore
  expect(literalFn('').parse()).toBe(false)
  //@ts-expect-error
  expect(literalFn('').parse('123')).toBe(false)
  //@ts-expect-error
  expect(literalFn('').parse(true)).toBe(false)
  //@ts-expect-error
  expect(literalFn('').parse(5)).toBe(false)
  //@ts-expect-error
  expect(literalFn('').parse(BigInt(1))).toBe(false)
  //@ts-expect-error
  expect(literalFn('').parse({ test: '' })).toBe(false)
  //@ts-expect-error
  expect(literalFn('').parse(() => {})).toBe(false)
  //@ts-expect-error
  expect(literalFn('').parse(null)).toBe(false)
  expect(literalFn(1).parse(1)).toBe(true)
  //@ts-expect-error
  expect(literalFn(1).parse(0)).toBe(false)
  expect(literalFn(true).parse(true)).toBe(true)
  //@ts-expect-error
  expect(literalFn(true).parse(false)).toBe(false)
  expect(literalFn(false).parse(false)).toBe(true)
  //@ts-expect-error
  expect(literalFn(false).parse(true)).toBe(false)
  expect(literalFn(BigInt(1)).parse(BigInt(1))).toBe(true)
  expect(literalFn(BigInt(1)).parse(BigInt(0))).toBe(false)
})

const objFn = t.object({
  stringKey: t.string,
  numberKey: t.number,
  booleanKey: t.boolean,
  bigIntKey: t.bigInt,
})
test('object validation', () => {
  expect(
    objFn().parse({
      stringKey: '',
      numberKey: 0,
      booleanKey: false,
      bigIntKey: BigInt(1),
    })
  ).toStrictEqual([true, true, true, true])
  expect(
    objFn().parse({
      stringKey: '',
      numberKey: '',
      booleanKey: '',
      bigIntKey: '',
    })
  ).toStrictEqual([true, false, false, false])
  /* 
    The key of the to be parse object are different to the schema
    In this case, .parse() should not be trying to even parse the object
    So its instantly returning false if the keys dont match 
  */
  expect(
    objFn().parse({
      stringKey: t.string,
      numberKey: t.number,
      booleanKey: t.boolean,
      // TYPO here
      //@ts-expect-error
      bigIntKeY: t.bigInt,
    })
  ).toStrictEqual(false)
  //@ts-expect-error
  expect(objFn().parse({})).toStrictEqual(false)
  //@ts-expect-error
  expect(t.object()().parse({})).toStrictEqual(false)
  //@ts-expect-error
  expect(t.object(null)().parse(null)).toStrictEqual(false)
})

const arrayFn = t.array
test('array validation', () => {
  expect(arrayFn().parse([])).toBe(true)
  expect(arrayFn().parse([0, ''])).toBe(true)
  expect(arrayFn().parse([[[], {}]])).toBe(true)
  //@ts-expect-error
  expect(arrayFn().parse()).toBe(false)
  //@ts-expect-error
  expect(arrayFn({}).parse({})).toBe(false)
  //@ts-expect-error
  expect(arrayFn(null).parse()).toBe(false)
  expect(arrayFn('string').parse([])).toStrictEqual(false)
  expect(arrayFn('string').parse(['abc'])).toStrictEqual([true])
  expect(arrayFn('string').parse(['abc', 'cad', 0])).toStrictEqual([true, true, false])
  //@ts-expect-error
  expect(arrayFn('string').parse(null)).toStrictEqual(false)
  //@ts-expect-error
  expect(arrayFn('string').parse({})).toStrictEqual(false)
  //@ts-expect-error
  expect(arrayFn('string').parse()).toBe(false)
  expect(arrayFn('number').parse([])).toStrictEqual(false)
  expect(arrayFn('number').parse([0])).toStrictEqual([true])
  expect(arrayFn('number').parse([0, 1, 'cad'])).toStrictEqual([true, true, false])
  //@ts-expect-error
  expect(arrayFn('number').parse()).toBe(false)
  expect(arrayFn('boolean').parse([])).toStrictEqual(false)
  expect(arrayFn('boolean').parse([true])).toStrictEqual([true])
  expect(arrayFn('boolean').parse([false])).toStrictEqual([true])
  expect(arrayFn('boolean').parse([true, false, 0])).toStrictEqual([true, true, false])
  //@ts-expect-error
  expect(arrayFn('boolean').parse()).toBe(false)
  expect(arrayFn('bigInt').parse([])).toStrictEqual(false)
  expect(arrayFn('bigInt').parse([BigInt(1)])).toStrictEqual([true])
  expect(arrayFn('bigInt').parse([BigInt(1), BigInt(1), 'cad'])).toStrictEqual([true, true, false])
  //@ts-expect-error
  expect(arrayFn('bigInt').parse()).toBe(false)
  expect(arrayFn('symbol').parse([])).toStrictEqual(false)
  expect(arrayFn('symbol').parse([Symbol()])).toStrictEqual([true])
  expect(arrayFn('symbol').parse([Symbol(), Symbol(), 'cad'])).toStrictEqual([true, true, false])
  //@ts-expect-error
  expect(arrayFn('symbol').parse()).toBe(false)
  expect(arrayFn('fn').parse([])).toStrictEqual(false)
  expect(arrayFn('fn').parse([() => null])).toStrictEqual([true])
  expect(arrayFn('fn').parse([() => null, () => 0, 0])).toStrictEqual([true, true, false])
  //@ts-expect-error
  expect(arrayFn('fn').parse()).toBe(false)
  expect(arrayFn('empty').parse([])).toBe(true)
  expect(arrayFn('empty').parse([0])).toBe(false)
  //@ts-expect-error
  expect(arrayFn('empty').parse()).toBe(false)
})

const tupleFn = t.tuple
test('tupple validation', () => {
  expect(tupleFn(['']).parse([''])).toStrictEqual([true])
  expect(tupleFn([0]).parse([0])).toStrictEqual([true])
  expect(tupleFn([true]).parse([true])).toStrictEqual([true])
  expect(tupleFn([false]).parse([false])).toStrictEqual([true])
  expect(tupleFn([BigInt(1)]).parse([BigInt(1)])).toStrictEqual([true])
  expect(tupleFn([null]).parse([null])).toStrictEqual([true])
  expect(tupleFn([[]]).parse([[]])).toStrictEqual([[true]])
  expect(tupleFn([{}]).parse([{}])).toStrictEqual([[]])
  expect(
    tupleFn(['hello', 0, { blabla: 0, bla: { bla: 'string', blas: [0, { inner: null }] } }]).parse([
      'hello',
      0,
      { blabla: 0, bla: { bla: 'string', blas: [0, { inner: null }] } },
    ])
  ).toStrictEqual([true, true, [true, [true, [true, [true]]]]])
})

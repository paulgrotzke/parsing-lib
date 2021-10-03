import { t } from './src/index'

// const objFn = t.object({
//   stringKey: t.string,
//   numberKey: t.number,
//   booleanKey: t.boolean,
//   bigIntKey: t.bigInt,
//   objectKey: t.object({
//     string: t.string,
//     numberKey: t.number,
//     booleanKey: t.boolean,
//     bigIntKey: t.bigInt,
//   }),
// })

// console.log(
//   objFn().parse({
//     stringKey: '',
//     numberKey: 0,
//     booleanKey: true,
//     bigIntKey: BigInt(9007199254740991),
//     objectKey: {
//       string: '',
//       numberKey: 0,
//       booleanKey: true,
//       bigIntKey: BigInt(9007199254740991),
//     },
//   })
// )

const test = [
  {
    stringKey: '',
    numberKey: 0,
    booleanKey: true,
    bigIntKey: BigInt(9007199254740991),
    objectKey: {
      string: '',
      numberKey: 0,
      booleanKey: true,
      bigIntKey: BigInt(9007199254740991),
    },
  },
]

const tupleFn = t.tuple(['hello', 0, { blabla: 0, bla: { bla: 'string' } }])

console.log(tupleFn.parse(['hello', 0, { blabla: 0, bla: { bla: 'string' } }]))

console.log(typeof Symbol(1))

const test1 = [() => null, 0]
const test2 = [() => null, 0]
console.log(test1[0].toString() === test2[0].toString())

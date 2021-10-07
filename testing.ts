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

const tupleFn = t.tuple([
  'hello',
  0,
  { blabla: 0, bla: { bla: 'string', blas: [0, { inner: null }] } },
])

console.log(
  tupleFn.parse(['hello', 0, { blabla: 0, bla: { bla: 'string', blas: [0, { inner: null }] } }])
)

// const tup = t.tuple([0])
// console.log(tup.parse([1]))

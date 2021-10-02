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

const test2 = [[], 'string']

// const arrayFn = t.array()
// console.log(arrayFn.parse([3, '', null]))

const arr = t.array('string')
console.log(arr.parse(['', '', 0]))

import { t } from './src/index'

const objFn = t.object({
  stringKey: t.string(),
  numberKey: t.number(),
  booleanKey: t.boolean(),
  bigIntKey: t.bigInt(),
})

console.log(
  objFn.parse({
    stringKey: '',
    numberKey: 0,
    booleanKey: true,
    bigIntKey: BigInt(9007199254740991),
  })
)
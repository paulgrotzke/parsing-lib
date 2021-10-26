import { t } from './src/lib/index'

const tupleFn = t.tuple([[{ 1: false }]]).parse([[{ 1: false }]])
console.log(tupleFn)

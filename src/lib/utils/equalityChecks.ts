import { Primitive } from '../exportTypes/types'

// TODO fix typing valItem should extend i
export const isDeepEqual = (i: Primitive, j: Primitive) => i === j

export const isTypeEqual = (i, j) => typeof i === typeof j

import { Primitive } from '../exportTypes/types'

export const isDeepEqual = (i: Primitive, j: Primitive) => i === j

export const isTypeEqual = (i, j) => typeof i === typeof j

export const isObject = (x) => x !== null && x.constructor.name === 'Object'

export const haveObjectsSameKeys = (x, y) =>
  /* 
    check if objects have same keys
    should be already avoided from typescript validation
    TODO: maybe could be useful to use this functionality as configurable setting
    THINK: turn setting of, if keys should not be strict equal 
  */
  [x, y].every(
    (object) =>
      new Set([x, y].reduce((keys, object) => keys.concat(Object.keys(object)), [])).size ===
      Object.keys(object).length
  )

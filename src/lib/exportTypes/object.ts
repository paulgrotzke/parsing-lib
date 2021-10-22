export const object =
  <T extends keyof K, K extends { [k: string | number | symbol]: () => void }>(obj: K) =>
  () => {
    return {
      /* 
      This type-safety should not be needed for production, bc this validation is
      intended to be done from the actual library
      BUT it helps for development and testing 
      AND it shows differences for the decalred PARSING schema and the API-RESPONSE types
      (if used so) 
      */
      parse: (val: { [key in T]: any }) => (obj && val ? haveObjSameKeys(obj, val) : false),
    }
  }

/* 
check if objects have same keys
should be already avoided from typescript validation
TODO: maybe could be useful to use this functionality as configurable setting
THINK: turn setting of, if keys should not be strict equal 
*/
const haveObjSameKeys = (obj, val) =>
  [obj, val].every(
    (object) =>
      new Set([obj, val].reduce((keys, object) => keys.concat(Object.keys(object)), [])).size ===
      Object.keys(object).length
  )
    ? parseObj(obj, val)
    : false

const parseObj = (obj, val) =>
  Object.keys(obj).map((k) =>
    isObject(obj[k]) ? parseObj(obj[k], val[k]) : obj[k]().parse(val[k])
  )

const isObject = (obj) => obj != null && obj.constructor.name === 'Object'

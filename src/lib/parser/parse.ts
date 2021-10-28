const arrayParse = (schema, response: any[]) => {
  schema.arrayParse(response).contains
  console.log(response)
  console.log(schema.type)
  console.log(schema.arrayParse(response))
}

const literalParse = (schema, response) => console.log('literal')
const objectParse = (schema, response) => console.log('object')
const primitiveParse = (schema, response) => console.log('primitive')
const tupleParse = (schema, response) => console.log('tuple')

export const parse = (schema, response) => {
  const dic = {
    arrayParse: () => arrayParse(schema, response),
    literalParse: () => literalParse(schema, response),
    objectParse: () => objectParse(schema, response),
    primitiveParse: () => primitiveParse(schema, response),
    tupleParse: () => tupleParse(schema, response),
  }

  dic[Object.keys(schema)[0]]()
}

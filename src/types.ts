export const string = (literal?: string) => {
  const parsingString = (value: string) => {
    console.log(3)
    console.log(value)
    literal ? parseLiteral(literal, value) : parse(typeof value, value)
  }
  return {
    parse: parsingString,
  }
}

export const number = (literal?: number) => {
  const parsingNumber = (value: number) => {
    console.log(4)
    literal ? parseLiteral(literal, value) : parse(typeof value, value)
  }
  return {
    parse: parsingNumber,
  }
}

export const boolean = (literal?: boolean) => {
  const parsingBoolean = (value: boolean) => {
    console.log(5)
    literal !== undefined ? parseLiteral(literal, value) : parse(typeof value, value)
  }
  return {
    parse: parsingBoolean,
  }
}

export const object = (obj: Record<string, unknown>) => {
  const parsing = (value) => {
    console.log(obj)
    console.log(value)
    for (let key in obj) {
      // @ts-ignore
      obj[key].parse(value[key])
      console.log('q', typeof value[key], value[key])
    }
  }
  return {
    parse: parsing,
  }
}

export const array = (tuple?: any) => {
  return
}

const parse = (type, value) => {
  console.log('parse')
  console.log(type)
  console.log(value)
  console.log(type === typeof value)
  if (type === typeof value) console.log(true)
  if (type !== typeof value) console.log(false)
}

const parseLiteral = (type, value) => {
  console.log('parseLiteral')
  if (type === value) console.log(true)
  if (type !== value) console.log(false)
}

const parseObj = (type, value) => {
  const dic = {
    number: () => {},
  }

  // dic[value]

  const func = () => {}

  console.log(type, typeof type)
  console.log(value, typeof value)
}

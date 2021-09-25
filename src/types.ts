interface Parse {
  parse: (val) => boolean
}

export const string = (): {
  parse: (val: string) => boolean
} => {
  return {
    parse: (val) => typeof val === 'string',
  }
}

export const number = (): {
  parse: (val: number) => boolean
} => {
  return {
    parse: (val) => typeof val === 'number',
  }
}

export const boolean = (): {
  parse: (val: boolean) => boolean
} => {
  return {
    parse: (val) => typeof val === 'boolean',
  }
}

export const bigInt = (): {
  parse: (val: BigInt) => boolean
} => {
  return {
    parse: (val) => typeof val === 'bigint',
  }
}

interface ParseObject {
  parse: (val) => boolean[]
}

export const object = (obj: Record<any, any>): ParseObject => {
  return {
    parse: (val) => Object.keys(obj).map((k) => obj[k].parse(val[k])),
  }
}

export const array = (arr: any[]) => {
  return {
    parse: (val) => arr.map((k) => k.parse()),
  }
}


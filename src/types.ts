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

export const fn = (): {
  parse: (val: () => any) => boolean
} => {
  return {
    parse: (val) => typeof val === 'function',
  }
}

export const undefined = (): {
  parse: (val?: undefined) => boolean
} => {
  return {
    parse: (val) => typeof val === 'undefined',
  }
}

export const symbol = (): {
  parse: (val: symbol) => boolean
} => {
  return {
    parse: (val) => typeof val === 'symbol',
  }
}

export const object = (
  obj: Record<any, any>
): {
  parse: (val) => boolean[]
} => {
  return {
    parse: (val) => Object.keys(obj).map((k) => obj[k].parse(val[k])),
  }
}

export const array = (
  type: 'string' | 'number' | 'boolean' | 'bigInt' | 'any' | 'empty' = 'any'
) => {
  const dic: {
    any: any[]
    string: string[]
    number: number[]
    boolean: boolean[]
    bigInt: bigint[]
  } = {
    any: [],
    string: [],
    number: [],
    boolean: [],
    bigInt: [],
  }
  const arr = dic[type]

  return {
    parse: (val) => arr.map((k) => k.parse()),
  }
}

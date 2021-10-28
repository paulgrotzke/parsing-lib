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

// export const string = (): {
//   parse: (val: string) => boolean | string
// } => {
//   return {
//     parse: (val) => (typeof val === 'string' ? true : 'NOT_A_STRING'),
//   }
// }

// export const number = (): {
//   parse: (val: number) => boolean | string
// } => {
//   return {
//     parse: (val) => (typeof val === 'number' ? true : 'NOT_A_NUMBER'),
//   }
// }

// export const boolean = (): {
//   parse: (val: boolean) => boolean | string
// } => {
//   return {
//     parse: (val) => (typeof val === 'boolean' ? true : 'NOT_A_BOOLEAN'),
//   }
// }

// export const bigInt = (): {
//   parse: (val: BigInt) => boolean | string
// } => {
//   return {
//     parse: (val) => (typeof val === 'bigint' ? true : 'NOT_A_BIGINT'),
//   }
// }

// export const fn = (): {
//   parse: (val: () => any) => boolean | string
// } => {
//   return {
//     parse: (val) => (typeof val === 'function' ? true : 'NOT_A_FUNCTION'),
//   }
// }

// export const undefined = (): {
//   parse: (val?: undefined) => boolean | string
// } => {
//   return {
//     parse: (val) => (typeof val === 'undefined' ? true : 'NOT_UNDEFINED'),
//   }
// }

// export const symbol = (): {
//   parse: (val: symbol) => boolean | string
// } => {
//   return {
//     parse: (val) => (typeof val === 'symbol' ? true : 'NOT_A_SYMBOL'),
//   }
// }

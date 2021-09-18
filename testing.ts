import { t } from './src/index'

interface Inventory {
  items: string[]
}

interface FetchResponse {
  inventory: Inventory
  token: string
  timestamp: string
}

const fetch = async (): Promise<FetchResponse> => {
  return await {
    inventory: {
      items: [],
    },
    token: 'token',
    timestamp: '01.01.2000',
  }
}

// const scheme = t.string('Tuna')

// const fetchString = () => 'Tuna'

// export const fetchInventory = async () => {
//   const result = await fetchString()
//   console.log(123)
//   scheme.parse(result)
//   return result
// }

// fetchInventory()

// vs.
// export const fetchInventory = scheme.parse(
//   (function fetchInventory(): string {
//     const result = fetchString()
//     console.log(123)
//     return result
//   })()
// )
// fetchInventory

const object = t.object({
  bla: t.string(),
  blabla: t.boolean(),
})

object.parse({
  bla: 0,
  blabla: "",
})

// const string = t.string()
// string.parse('Tuna')

// const number = t.number()
// number.parse(0)

// const boolean = t.boolean(false)
// boolean.parse(false)

// const type = {
//   inventory: {
//     items: [],
//   },
//   token: 'token',
//   timestamp: '01.01.2000',
// }

// const type2 = types.object({
//   inventory: types.object({
//     items: types.array(),
//   }),
//   token: types.string('token'),
//   timestamp: types.string('01.01.2000'),
// })

// const parse = (fn: any) => {
//   fn()
// }

// const test = types.string()
// test.parse()

// export const fetchInventory = parse(async function fetchInventory(): Promise<FetchResponse> {
//   const result = await fetch()
//   console.log(123)
//   return result
// })

// fetchInventory

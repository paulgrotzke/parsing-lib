import { t, parse } from './src/lib/index'

const schema = t.array('number')

const fetch = async (): Promise<any> => {
  const fetchApi = async () => [0, 0]
  const response = await fetchApi()
  parse(schema, response)
  return response
}

fetch()

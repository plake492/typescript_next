interface API {
  api: string
  method?: string
  body?: any
  external?: boolean
}

export const API = async <T>({
  api,
  method = 'GET',
  body,
  external
}: API): Promise<T> =>
  await fetch(!external ? `/api/${api}` : api, {
    method,
    body
  })
    .then(data => data.json())
    .catch(err => {
      console.error(err)
      throw err.message
    })

const { fetch, encodeURIComponent: esc } = window

export default function (args) {
  const {
    url,
    data = {},
    method = 'GET',
    ...rest
  } = args
  const params = {
    method,
    ...rest,
  }

  let query = url

  if (method !== 'GET') {
    params.body = JSON.stringify(data)
  }

  if (method === 'GET') {
    const qs = Object.keys(data)
      .map(k => `${esc(k)}=${esc(data[k])}`)
      .join('&')

    query = `${query}?${qs}`
  }

  return fetch(query, params).then(res => res.json())
}

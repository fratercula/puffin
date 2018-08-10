const { fetch } = window

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

  if (method !== 'GET') {
    params.body = JSON.stringify(data)
  }

  return fetch(url, params).then(res => res.json())
}

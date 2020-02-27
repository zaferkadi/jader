const api = async (
  url: string,
  { method, signal, data }: { method: string; signal: AbortSignal; data?: {} }
) => {
  const response = await fetch(url, {
    method,
    signal,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return {
    error: response.ok ? null : response.status,
    results: response.ok ? await response.json() : []
  }
}

export const get = async (url: string, signal: AbortSignal) =>
  await api(url, { method: 'GET', signal })

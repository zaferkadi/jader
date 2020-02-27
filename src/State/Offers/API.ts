import { get } from '../../Utils/api'

const url = (query: string) =>
  `${process.env.REACT_APP_API}?searchTerm=${query}`

export const getOffers = (location: string, signal: AbortSignal) => {
  return get(url(location), signal)
}

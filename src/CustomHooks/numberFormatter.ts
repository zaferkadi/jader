const locale = process.env.REACT_APP_LOCALE

const useCurrencyFormatter = (currency?: string) => {
  const Inlt = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency || 'EUR'
  })
  return Inlt.format
}

const useNumberFormatter = () => {
  const Inlt = new Intl.NumberFormat(locale)
  return Inlt.format
}
export { useCurrencyFormatter, useNumberFormatter }

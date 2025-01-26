const formatCurrency = (
  value: number,
  currency = "BRL",
  locale = "pt-BR",
  showSymbol = true
) => {
  if (value)
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      currencyDisplay: showSymbol ? "symbol" : "name",
    }).format(value)
}

export { formatCurrency }

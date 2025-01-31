import { IHomeFilter } from "@/types/home"

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

const getQueryParams = (filter: IHomeFilter) => {
  return Object.fromEntries(
    Object.entries({
      _page: filter.page,
      _per_page: filter.pageSize,
      _sort: filter.sort,
      category: filter.type !== "ALL" ? filter.type : "",
    }).filter(([, value]) => value !== undefined && value !== "")
  )
}

export { formatCurrency, getQueryParams }

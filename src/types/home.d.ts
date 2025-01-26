type TFilter = "ALL" | "SNEAKERS" | "T_SHIRTS" | "PANTS"

type TSort = "price" | "promotional_price" | ""

interface IHomeFilter {
  type: TFilter
  sort: TSort
  page?: number
  pageSize?: number
}

export { TFilter, TSort, IHomeFilter }

import { useEffect, useState } from "react"
import { getProducts } from "@/services/products"
import { IData } from "@/types"
import { IHomeFilter } from "@/types/home"
import { getQueryParams } from "@/utils"

export const useProducts = (filter: IHomeFilter) => {
  const [data, setData] = useState<IData>({ items: [], total: 0 })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const queryParams = getQueryParams(filter)
        const { data: response } = await getProducts(queryParams)
        setData({ items: response.data, total: response.items })
      } catch (error) {
        console.error("Erro ao buscar produtos:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [filter.page, filter.type, filter.sort]) //eslint-disable-line

  return { data, total: data.total, isLoading }
}

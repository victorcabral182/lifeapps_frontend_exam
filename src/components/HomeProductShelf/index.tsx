"use client"

import { getProducts } from "@/services/products"
import { IData, IProduct } from "@/types"
import { IHomeFilter, TFilter } from "@/types/home"
import { Button, Pagination, Select } from "antd"
import { useEffect, useState } from "react"
import { ProductCardItem } from "../ProductCardItem"
import { buttons, filterOptions } from "@/constants/HomePage"
import { useRouter } from "next/navigation"

export const HomeProductShelf = () => {
  const { push } = useRouter()

  const [data, setData] = useState<IData>()
  const [filter, setFilter] = useState<IHomeFilter>({
    type: "ALL",
    sort: "",
    page: 1,
    pageSize: 6,
  })

  const handleType = (name: TFilter) => {
    if (name === filter?.type) return "primary"
    else return "default"
  }

  async function tryGetProducts() {
    try {
      const queryParams = Object.fromEntries(
        Object.entries({
          _page: filter?.page,
          _per_page: 6,
          _sort: filter?.sort,
          category: filter?.type !== "ALL" ? filter?.type : "",
        }).filter(([, value]) => value !== undefined && value !== "")
      )
      const { data: response } = await getProducts(queryParams)
      setData({ items: response.data, total: response?.items })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    tryGetProducts()
  }, [filter?.page, filter?.type, filter?.sort]) // eslint-disable-line

  return (
    <>
      <section className="flex flex-col justify-center items-center p-8">
        <div className="flex gap-4 w-full px-[256px]">
          {buttons?.map((e) => {
            return (
              <Button
                key={e}
                htmlType={"button"}
                type={handleType(e)}
                onClick={() =>
                  setFilter({ ...filter, type: e, sort: filter.sort })
                }
                className="uppercase font-semibold w-full rounded-none py-8"
              >
                {e === "ALL" ? "Todos os produtos" : e}
              </Button>
            )
          })}
        </div>
        <div className="flex items-center justify-between w-full px-[256px] gap-4 py-4">
          <p className="w-full">{data?.total} produtos</p>
          <div className="w-full" />
          <div className="w-full" />
          <Select
            allowClear
            className="w-full"
            placeholder="Ordenar por"
            options={filterOptions}
            onChange={(e) => setFilter({ ...filter, sort: e })}
          />
        </div>
        <div className="grid grid-cols-3 mt-8 gap-8 px-[256px]">
          {data?.items?.map((item: IProduct) => {
            const isPromo = Boolean(item.discount_percentage)
            return (
              <ProductCardItem
                item={item}
                isPromo={isPromo}
                key={item.id}
                onClick={() => push(`/product/${item.id}`)}
              />
            )
          })}
        </div>
        <Pagination
          className="mt-10"
          current={filter?.page}
          total={data?.total ?? 0}
          pageSize={filter?.pageSize}
          onChange={(page) => setFilter({ ...filter, page })}
        />
      </section>
    </>
  )
}

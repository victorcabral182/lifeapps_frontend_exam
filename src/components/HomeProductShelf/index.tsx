"use client"

import { getProducts } from "@/services/products"
import { IData, IProduct } from "@/types"
import { IHomeFilter } from "@/types/home"
import { Pagination, Select } from "antd"
import { useEffect, useState } from "react"
import { ProductCardItem } from "../ProductCardItem"
import { filterOptions } from "@/constants/HomePage"
import { useRouter } from "next/navigation"
import { HomeFilter } from "../HomeFilter/HomeFilter"

export const HomeProductShelf = () => {
  const { push } = useRouter()

  const [data, setData] = useState<IData>()
  const [filter, setFilter] = useState<IHomeFilter>({
    type: "ALL",
    sort: "",
    page: 1,
    pageSize: 6,
  })

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
      <section
        className="flex flex-col justify-center items-center p-4 md:p-8 lg:px-8 xl:px-16 2xl:px-32"
        data-testid="home-product-shelf"
      >
        <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-2 w-full px-4 lg:px-8 xl:px-16 2xl:px-[256px]">
          <HomeFilter filter={filter} setFilter={(e) => setFilter(e)} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 lg:px-8 xl:px-16 2xl:px-[256px] gap-4 py-4">
          <p className="w-full text-center md:text-left">
            {data?.total} produtos
          </p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4 md:gap-8 lg:px-8 xl:px-16 2xl:px-32 px-4">
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

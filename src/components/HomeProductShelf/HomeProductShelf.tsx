"use client"

import { useState } from "react"
import { Pagination } from "antd"
import { useProducts } from "@/hooks/useProducts"
import { IHomeFilter } from "@/types/home"
import { HomeFilter } from "../HomeFilter/HomeFilter"
import { MainSelectComposition } from "../MainSelectComposition/MainSelectComposition"
import { ProductCardShelf } from "../ProductCardShelf/ProductCardShelf"

export const HomeProductShelf = () => {
  const [filter, setFilter] = useState<IHomeFilter>({
    type: "ALL",
    sort: "",
    page: 1,
    pageSize: 6,
  })

  const { data, total, isLoading } = useProducts(filter)

  return (
    <section
      className="flex flex-col justify-center items-center p-4 md:p-8 lg:px-8 xl:px-16 2xl:px-32"
      data-testid="home-product-shelf"
    >
      <HomeFilter filter={filter} setFilter={setFilter} />
      <MainSelectComposition
        data={data}
        filter={filter}
        setFilter={setFilter}
      />
      <ProductCardShelf data={data} isLoading={isLoading} />
      <Pagination
        className="mt-10"
        current={filter.page}
        total={total}
        pageSize={filter.pageSize}
        onChange={(page) => setFilter((prev) => ({ ...prev, page }))}
      />
    </section>
  )
}

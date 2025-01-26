"use client"

import { MainBanner } from "@/components/MainBanner"
import { getProducts } from "@/services/products"
import { IData, IProduct } from "@/types"
import { IHomeFilter, TFilter } from "@/types/home"
import { formatCurrency } from "@/utils"
import { Button, Pagination } from "antd"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  const [filter, setFilter] = useState<IHomeFilter>({
    type: "ALL",
    sort: "",
    page: 1,
    pageSize: 6,
  })
  const [data, setData] = useState<IData>()

  const handleType = (name: TFilter) => {
    if (name === filter?.type) return "primary"
    else return "default"
  }

  async function tryGetProducts() {
    try {
      const { data: response } = await getProducts({
        _page: filter.page,
        _per_page: 6,
        _sort: filter.sort,
      })

      setData({ items: response.data, total: response?.items })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    tryGetProducts()
  }, [filter?.page]) // eslint-disable-line

  return (
    <section className="flex flex-col">
      <MainBanner />
      <section className="flex flex-col justify-center items-center p-8">
        <div className="flex gap-4 w-full px-[256px]">
          <Button
            type={handleType("ALL")}
            onClick={() => setFilter({ type: "ALL", sort: filter.sort })}
            className="uppercase font-semibold w-full rounded-none py-8"
          >
            Todos os Produtos
          </Button>
          <Button
            type={handleType("SNEAKERS")}
            onClick={() => setFilter({ type: "SNEAKERS", sort: filter.sort })}
            className="uppercase font-semibold w-full rounded-none py-8"
          >
            Tênis
          </Button>
          <Button
            type={handleType("T_SHIRTS")}
            onClick={() => setFilter({ type: "T_SHIRTS", sort: filter.sort })}
            className="uppercase font-semibold w-full rounded-none py-8"
          >
            Camisetas
          </Button>
          <Button
            type={handleType("PANTS")}
            onClick={() => setFilter({ type: "PANTS", sort: filter.sort })}
            className="uppercase font-semibold w-full rounded-none py-8"
          >
            Calças
          </Button>
        </div>
        <div className="grid grid-cols-3 mt-8 gap-8 px-[256px]">
          {data?.items?.length &&
            data?.items?.map((e: IProduct) => {
              const isPromo = Boolean(e.discount_percentage)
              return (
                <div
                  key={e.id}
                  className="relative cursor-pointer transition-all duration-150 hover:scale-105"
                >
                  <div className=" flex justify-center items-center overflow-hidden">
                    <Image
                      src={e.image}
                      alt={e.name}
                      width={1500}
                      height={1500}
                      className="object-cover aspect-square"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 border border-gray-300 px-4 border-t-0 rounded-b-lg h-20 max-h-20">
                    <p className="font-semibold">{e.name}</p>
                    <div className="flex flex-col">
                      <p
                        className={`font-semibold ${
                          isPromo && "line-through text-xs"
                        }`}
                      >
                        {formatCurrency(e.price)}
                      </p>
                      {e.promotional_price && (
                        <p className={`font-semibold`}>
                          {formatCurrency(e.promotional_price)}
                        </p>
                      )}
                    </div>
                  </div>
                  {e.discount_percentage && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-4 py-2 rounded-bl-lg">
                      <span>{e.discount_percentage}% OFF</span>
                    </div>
                  )}
                </div>
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
    </section>
  )
}

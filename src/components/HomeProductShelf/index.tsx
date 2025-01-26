import { getProducts } from "@/services/products"
import { IData, IProduct } from "@/types"
import { IHomeFilter, TFilter } from "@/types/home"
import { Button, Pagination, Select } from "antd"
import { useEffect, useState } from "react"
import { ProductCardItem } from "../ProductCardItem"

export const MainProductShelf = () => {
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
    <>
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
        <div className="flex items-center justify-between w-full px-[256px] gap-4 py-4">
          <p className="w-full">{data?.total} produtos</p>
          <div className="w-full" />
          <div className="w-full" />
          <Select
            placeholder="Ordenar por"
            className="w-full"
            // onChange={handleChange}
            options={[
              { value: "jack", label: "Preço crescente" },
              { value: "21312", label: "Preço decrescente" },
              { value: "lucy", label: "Itens em promoção" },
            ]}
          />
        </div>
        <div className="grid grid-cols-3 mt-8 gap-8 px-[256px]">
          {data?.items?.length &&
            data?.items?.map((item: IProduct) => {
              const isPromo = Boolean(item.discount_percentage)
              return (
                <ProductCardItem isPromo={isPromo} item={item} key={item.id} />
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

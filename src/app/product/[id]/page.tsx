"use client"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/controller"
import "swiper/css/pagination"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb, Button } from "antd"
import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay, Controller } from "swiper/modules"

import { getProductById, getProducts } from "@/services/products"
import { IProduct } from "@/types"
import { ProductCardItem } from "@/components/ProductCardItem"
import { formatCurrency } from "@/utils"

export default function ProductIdPage() {
  const { id }: { id: string } = useParams()

  const [data, setData] = useState<IProduct>()
  const [swiper, setSwiper] = useState<IProduct[]>([])

  async function tryGetInfo(id: string) {
    try {
      const [product, allItems] = await Promise.all([
        getProductById(id),
        getProducts({}),
      ])
      setData(product?.data?.[0])
      setSwiper(allItems?.data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (id) tryGetInfo(id)
  }, [id])

  const swiperModules = [Autoplay, Controller]
  const autoplayConfig = { delay: 4000 }

  if (data)
    return (
      <section className="flex flex-col gap-4 px-[256px]">
        <Breadcrumb
          className="pt-4 font-semibold"
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
            {
              title: data?.name,
            },
          ]}
        />
        <div className="grid grid-cols-2 gap-20 mb-10">
          <ProductCardItem
            item={data}
            onClick={() => {}}
            hideExtraInfo={true}
            isPromo={Boolean(data?.discount_percentage)}
          />
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-semibold">{data?.name}</p>
              <div className="flex items-center gap-2">
                {data?.promotional_price && (
                  <p className="line-through text-xs font-light">
                    {formatCurrency(data?.promotional_price)}
                  </p>
                )}
                <p
                  className={`text-xl font-semibold ${
                    data?.promotional_price && "text-[#FF0000]"
                  }`}
                >
                  {data?.promotional_price
                    ? formatCurrency(data?.promotional_price)
                    : formatCurrency(data?.price)}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold">Descrição:</p>
                <p>{data?.description}</p>
              </div>
            </div>
            <Button type="primary" size="large" className="uppercase">
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
        <Swiper
          speed={1000}
          slidesPerView={4}
          modules={swiperModules}
          spaceBetween={16}
          autoplay={autoplayConfig}
          pagination={{ clickable: true }}
          className="w-full overflow-hidden mb-8"
        >
          {swiper
            ?.filter((item) => item.id !== data.id)
            .map((e) => {
              return (
                <SwiperSlide key={e.id}>
                  <Image
                    src={e.image}
                    alt={e.name}
                    width={2000}
                    height={2000}
                    className="object-cover aspect-square"
                  />
                </SwiperSlide>
              )
            })}
        </Swiper>
      </section>
    )
}

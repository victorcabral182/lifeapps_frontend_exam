"use client"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/controller"
import "swiper/css/pagination"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "antd"
import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay, Controller } from "swiper/modules"

import { getProductById, getProducts } from "@/services/products"
import { IProduct } from "@/types"
import { ProductCardItem } from "@/components/ProductCardItem"
import { GeneralProductInfo } from "@/components/GeneralProductInfo"

const swiperModules = [Autoplay, Controller]
const autoplayConfig = { delay: 4000 }

export default function ProductIdPage() {
  const { id }: { id: string } = useParams()
  const { push } = useRouter()

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

  if (data)
    return (
      <section className="flex flex-col gap-4 px-4 lg:px-8 xl:px-16 2xl:px-[256px]">
        <Breadcrumb
          className="pt-4 font-semibold"
          items={[{ title: <Link href="/">Home</Link> }, { title: data?.name }]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-10 2xl:gap-20 sm:mb-10">
          <ProductCardItem
            item={data}
            onClick={() => {}}
            hideExtraInfo={true}
            isPromo={Boolean(data?.discount_percentage)}
          />
          <GeneralProductInfo {...data} />
        </div>
        <p className="font-semibold">Veja outros produtos como este</p>
        <Swiper
          speed={1000}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={swiperModules}
          spaceBetween={16}
          autoplay={autoplayConfig}
          pagination={{ clickable: true }}
          className="w-full overflow-hidden mb-8"
        >
          {swiper
            ?.filter((item) => item.id !== data.id)
            .map((e) => (
              <SwiperSlide key={e.id}>
                <Image
                  src={e.image}
                  alt={e.name}
                  width={2000}
                  height={2000}
                  className="object-cover aspect-square cursor-pointer"
                  onClick={() => push(`/product/${e.id}`)}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    )
}

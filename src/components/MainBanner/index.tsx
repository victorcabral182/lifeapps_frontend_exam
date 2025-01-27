"use client"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Controller } from "swiper/modules"
import Image from "next/image"
import { mainBannerItems } from "@/constants/HomePage"

export const MainBanner = () => {
  const swiperModules = [Autoplay, Controller]
  const autoplayConfig = { delay: 4000 }
  return (
    <>
      <Swiper
        speed={1000}
        slidesPerView={1}
        modules={swiperModules}
        autoplay={autoplayConfig}
        pagination={{ clickable: true }}
        className="w-full max-h-[500px] overflow-hidden"
      >
        {mainBannerItems?.map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <Image
                src={e.image}
                alt={e.alt}
                className="w-full h-[500px] relative cursor-pointer"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

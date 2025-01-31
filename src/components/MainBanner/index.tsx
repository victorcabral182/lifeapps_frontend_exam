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
  const autoplayConfig = { delay: 4000, disableOnInteraction: false }

  return (
    <>
      <Swiper
        data-testid="main-banner"
        speed={1000}
        slidesPerView={1}
        modules={swiperModules}
        autoplay={autoplayConfig}
        pagination={{ clickable: true }}
        className="w-full max-h-[500px] overflow-hidden"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {mainBannerItems?.map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <Image
                src={e.image}
                alt={e.alt}
                width={1920}
                height={500}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover relative cursor-pointer"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

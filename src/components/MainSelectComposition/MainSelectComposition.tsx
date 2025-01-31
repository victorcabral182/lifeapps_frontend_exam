"use client"

import { Select } from "antd"
import { filterOptions } from "@/constants/HomePage"
import { IMainSelectCompositionProps } from "./types"

export const MainSelectComposition = ({
  data,
  filter,
  setFilter,
}: IMainSelectCompositionProps) => {
  return (
    <div className="hidden md:flex flex-col md:flex-row items-center justify-between w-full px-4 lg:px-8 xl:px-16 2xl:px-[256px] gap-4 py-4">
      <p className="w-full text-center md:text-left">{data?.total} produtos</p>
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
  )
}

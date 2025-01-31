import { IHomeFilter } from "@/types/home"

interface IHomeFilterProps {
  filter: IHomeFilter
  setFilter: (e: IHomeFilter) => void
}

export { IHomeFilterProps }

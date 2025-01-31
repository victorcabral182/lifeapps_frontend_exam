import { IHomeFilter } from "@/types/home"

interface IMainSelectCompositionProps {
  data: { total: number }
  filter: IHomeFilter
  setFilter: (value: IHomeFilter) => void
}

export { IMainSelectCompositionProps }

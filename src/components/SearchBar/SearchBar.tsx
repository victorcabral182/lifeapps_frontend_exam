import { Input } from "antd"

export const SearchBar = ({ className }: { className: string }) => {
  const { Search } = Input
  return (
    <Search
      className={`w-96 ${className}`}
      type="search"
      variant="outlined"
      allowClear
      placeholder="Quero comprar algo específico..."
    />
  )
}

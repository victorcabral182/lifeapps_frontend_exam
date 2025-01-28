import { Input } from "antd"

export const SearchBar = () => {
  const { Search } = Input

  return (
    <Search
      className="w-96"
      type="search"
      variant="outlined"
      allowClear
      placeholder="Quero comprar algo específico..."
    />
  )
}

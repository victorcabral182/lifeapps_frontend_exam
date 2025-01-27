interface IProduct {
  id: string
  name: string
  category: string
  price: number
  discount_percentage: number
  promotional_price: number
  image: string
  description: string
}

interface IData {
  items: IProduct[]
  total: number
}

interface IOption {
  value: string | number
  label: string
}

export { IProduct, IData, IOption }

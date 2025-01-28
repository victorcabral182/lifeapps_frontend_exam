import api from "./api"

interface IProductsParams {
  _page?: number
  _per_page?: number
  _sort?: string
  category?: string
}

async function getProducts(params: IProductsParams) {
  const response = await api.get("/products", { params })
  return response
}

async function getProductById(id: string) {
  const response = await api.get(`/products?id=${id}`)
  return response
}

export { getProducts, getProductById }

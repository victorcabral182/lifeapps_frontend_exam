import api from "./api"

interface IProductsParams {
  _page?: number
  _per_page?: number
  _sort?: string
}

async function getProducts(params: IProductsParams) {
  const response = await api.get("/products", { params })
  return response
}

export { getProducts }

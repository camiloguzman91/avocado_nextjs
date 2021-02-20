import React from 'react'
import { useRouter } from 'next/router'
import { useFetch } from '../../../hooks/useFetch'
const ProductItem = () => {
  const router = useRouter()
  const {
    query: { productId }
  } = router
  const { data, loading } = useFetch(`/api/avo/${productId}`)

  if (loading) {
    return 'loading..'
  }

  if (Object.entries(data).length === 0) {
    return 'No hay avocados'
  }

  return data && <div>Esta es la pagina del producto {data.name}</div>
}

export default ProductItem

import React, { useState, useEffect } from 'react'
import api from './../../services/api'
import { useParams } from 'react-router-dom'
import './index.css'

function Product() {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {

    api.get(`/products/${id}`).then(response => {
      setProduct(response.data)
    })
  }, [])

  return (
    <div className="product-info">
      <h1>{product.title}</h1>
      <p>{product.description}</p>

      <p>URL: <a href={product.url}>{product.url}</a></p>
    </div>
  )
}

export default Product
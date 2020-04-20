import React, { useState, useEffect } from 'react';
import api from './../../services/api'
import './index.css'


function Main() {
  const [products, setProducts] = useState([])
  const [productInfo, setProductInfo] = useState({})
  const [page, setPage] = useState(1)
  useEffect(() => {
    loadProducts(page)
  }, [])

  async function loadProducts(page) {
    const response = await api.get(`/products?page=${page}`)
    const { docs, ...productInfo } = response.data

    setProducts(docs)
    setProductInfo(productInfo)
    setPage(page)
  }

  function prevPage() {
    if(page === 1) return
    const pageNumber = page - 1
    loadProducts(pageNumber)
  }

  function nextPage() {
    if (page === parseInt(productInfo.pages)) return
    const pageNumber = page + 1
    loadProducts(pageNumber)
  }


  return (
    <div className="product-list">
      {products.map(produto => (
        <article key={produto._id}>
          <strong>{produto.title}</strong>
          <p>{produto.description}</p>

          <a href="">Acessar</a>
        </article>
      ))}
      <div className="actions">
        <button disabled={page === 1} type="button" onClick={prevPage}>Anterior</button>
        <button disabled={page === parseInt(productInfo.pages)} type="button" onClick={nextPage}>Próxima</button>
      </div>
    </div>
  );
}

export default Main;

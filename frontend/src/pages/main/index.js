import React, { useState, useEffect } from 'react';
import api from './../../services/api'
import './index.css'


function Main() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/products').then(response => {
      setProducts(response.data.docs)
    })
  }, [])


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
        <button>Anterior</button>
        <button>Próxima</button>
      </div>
    </div>
  );
}

export default Main;

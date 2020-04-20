import React, { useState, useEffect } from 'react';
import api from './../../services/api'

function Main() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/products').then(response => {
      setProducts(response.data.docs)
    })
  }, [])


  return (
    <main>
        <h1>Main</h1>
       <ul>
        {products.map(produto => (
          <li key={produto._id}>
            <p>{produto.title}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;

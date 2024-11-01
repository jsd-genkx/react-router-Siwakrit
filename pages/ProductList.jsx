import React from 'react'

function ProductList() {
  return (
    <div>
        <h1>Product List</h1>
        <ul>
            {ProductList.map((product) => (
                <li key={product.id}>
                    <Link to={`/product${product.id}`}>{product.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductList
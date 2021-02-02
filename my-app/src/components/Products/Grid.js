import React from 'react'
import { Link } from 'react-router-dom';

export const ProductsGrid = ({products, search}) => {

    console.log('users length:::', products.length)
    if (products.length === 0) return null

    const ProductCol = (product,index) => {

        return(
            <div 
                key={index}
                className={index%2 === 0?'odd':'even'}> 
                    <Link to={`/product/${product.name}?${product.id}`}></Link>
            </div>
          )
    }

    const productsGrid = products.map((product,index) => ProductCol(product,index))

    return(
        <div className="container">
            <h2>Search results for: {search}</h2>
            {productsGrid}
        </div>
    )
}


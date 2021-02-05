import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

export const ProductsGrid = ({products, search, renderProduct}) => {

    if (products.length === 0) return null

    const ProductCol = (product,index) => {
        return(
            <div class="product">
                <div className="row">
                    <div className="col-12 col-md-2">
                        <div className="product-photo">
                        <NavLink to={`/product/${product.id}/${product.slug}`}>
                            <img className="img-fluid" src={product.mainImage} alt={product.title}/>
                        </NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-md-10">
                        <NavLink to={`/product/${product.id}/${product.slug}`}>
                            <div className="price">
                                {product.price}
                            </div>
                            <div className="title">
                                {product.title}
                            </div>
                            <div className="region">
                                {product.region}
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
          )
    }

    const productsGrid = products.map((product,index) => ProductCol(product,index))

    return(
        <div className="container">
            
            <div className="breadcrumbs">

            </div>

            <div id="product-list">
                {productsGrid}
            </div>
            
        </div>
    )
}


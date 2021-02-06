import React from 'react'
import {NavLink} from 'react-router-dom'

export const ProductView = ({product}) => {
    
    return(
        <div className="container" id="product-view">
            <div className="row">
                <div className="col-12 col-sm-8">
                    <img className="img-fluid" src={product.mainImage} alt={product.title}/>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="information">
                        <div className="condition">
                           <span>{product.condition} </span> 
                           -
                           <span>{product.salesCount} vendidos</span>
                        </div>
                        <div className="title">
                            {product.title}
                        </div>
                        <div className="price">
                            {product.price}
                        </div>
                        <button className="btn btn-primary">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="additional-information">
                        <h2>Descripción del producto</h2>
                        <div className="description">
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
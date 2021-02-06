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

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="additional-information">
                        <h2>{product.description}</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}
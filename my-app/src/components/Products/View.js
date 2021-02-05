import React from 'react'
import {NavLink} from 'react-router-dom'

export const ProductView = ({product}) => {
    
    return(
        <div className="display-product">
            <h4> Product view</h4>
            {product.id}
        </div>
    )
}
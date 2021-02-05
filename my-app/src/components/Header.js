import React from 'react'
import logo from '../assets/media/Logo_ML.png';
import {NavLink} from 'react-router-dom'

export const Header = ({searchOnChange, searchProducts }) => {
    return(
        <div id="ml-navbar" className="header mb-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-2 col-md-1 mb-2">
                        <NavLink to='/'><img src={logo} alt="Logo Mercado Libre"/></NavLink>
                    </div>
                    <div className="col-12 col-sm-10 col-md-11">
                        <div className="search-bar">
                            <input 
                                onChange={(e) => searchOnChange(e)}
                                type="text" 
                                placeholder="Nunca dejes de buscar" 
                                tabindex="1"/>
                            
                            <button 
                                onClick= {(e) => searchProducts()}
                                type="submit" 
                                class="nav-search-btn" 
                                tabindex="2">
                                <div role="img" aria-label="Buscar" class="nav-icon-search"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
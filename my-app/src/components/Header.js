import React from 'react'
import logo from '../assets/media/Logo_ML.png';

export const Header = ({searchOnChange, search }) => {
    return(
        <div id="ml-navbar" className="header">
            <div className="container">
                <div className="left">
                    <img src={logo} alt="Logo Mercado Libre"/>
                </div>

                <div className="right">
                    <div className="search-bar">
                        <input 
                            onChange={(e) => searchOnChange(e)}
                            type="text" 
                            placeholder="Nunca dejes de buscar" 
                            tabindex="1"/>
                        
                        <button 
                            onClick= {(event) => searchOnChange()}
                            type="submit" 
                            class="nav-search-btn" 
                            tabindex="2">
                            <div role="img" aria-label="Buscar" class="nav-icon-search"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
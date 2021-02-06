import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import { Header } from './components/Header'
import { searchProducts } from './services/ProductService'
import { ProductsGrid } from './components/Products/Grid'
import { ProductView } from './components/Products/View' 
import { NotFound } from './components/NotFound' 
import { stringToSlug } from "./helpers/helpers.js"

class App extends Component {

  state = {
    products: [],
    hideProducts : false,
    numberOfProducts: 0,
    search : ''
  }

  renderProduct = (routerProps) => {
    let productId = parseInt(routerProps.match.params.id)
    let foundProduct = this.state.products.find(productObj => productObj.id === productId)
    return (
      foundProduct ? 
      <ProductView 
        product={foundProduct}/> :
        <NotFound/>
    )
  }

  hideProducts = () => {
    this.setState({hideProducts: true})
  }

  showProducts = () => {
    this.setState({hideProducts: false})
  }

  searchOnChange = (event) => {
    this.setState({search: event.target.value})
  }

  searchProducts = (e) => {
    searchProducts(this.state.search)
      .then(products => {
        this.setState({products: products, numberOfProducts: products.length})
        this.showProducts()
      });
  }

  render() {
    
    return (
      <div className="App">
        <Header 
          searchOnChange={this.searchOnChange}
          searchProducts={this.searchProducts}
        />

        <div className="content">

          {!this.state.hideProducts ? <ProductsGrid products={this.state.products}></ProductsGrid> : null}

          <Switch>
            <Route exact path = '/' />
            <Route path = '/product/:id/:slug' render = {routerProps => this.renderProduct(routerProps)} />
            <Route component = {NotFound} />
          </Switch>
        </div>

      </div>
    );

  }
}

export default App;

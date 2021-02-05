import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import { Header } from './components/Header'
import { searchProducts } from './services/ProductService'
import { ProductsGrid } from './components/Products/Grid'
import { ProductView } from './components/Products/View' 
import { NotFound } from './components/NotFound' 

class App extends Component {

  state = {
    products: [],
    numberOfProducts: 0,
    search : ''
  }

  renderProduct = (routerProps) => {
    let productId = parseInt(routerProps.match.params.id)
    let foundProduct = this.state.products.find(productObj => productObj.id === productId)
    console.log( 'productId: ' + foundProduct)
    console.log( 'foundProduct: ' + foundProduct)
    return (foundProduct ? <ProductView product={foundProduct}/> : <NotFound/>)
  }

  searchOnChange = (event) => {
    console.log('On change search: ', event.target.value);
    this.setState({search: event.target.value})
  }

  searchProducts = (e) => {
    searchProducts(this.state.search)
      .then(products => {
        console.log(products);
        this.setState({products: products, numberOfProducts: products.length})
      });
  }

  render() {
    
    return (
      <div className="App">
        <Header 
          searchOnChange={this.searchOnChange}
          searchProducts={this.searchProducts}
        />

        <div className="row mrgnbtm">
          <ProductsGrid 
            products={this.state.products}
            search={this.search}
            renderProduct={this.renderProduct}
            />
        </div>
        <Switch>
          <Route exact path = '/' />
          <Route path = '/product/:id/:slug' render = {routerProps => this.renderProduct(routerProps)} />
          <Route component = {NotFound} />
        </Switch>
      </div>
    );

  }
}

export default App;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './services/UserService'
import { getProducts } from './services/ProductService'
import { ProductsGrid } from './components/Products/Grid'

class App extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0,
    products: [],
    numberOfProducts: 0,
    search : ''
  }

  createUser = (e) => {
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
  }

  getProducts = () => {
    getProducts()
      .then(products => {
        console.log(products)
        this.setState({products: products, numberOfProducts: products.length})
      });
  }

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }

  onChangeForm = (e) => {
      let user = this.state.user
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      }
      this.setState({user})
  }

  searchOnChange = (event) => {
    console.log('On change search: ', event.target.value);
    this.setState({
      search: event.target.value
    })
  }

  searchWord = (event) => {
    
  }

  render() {
    
    return (
      <div className="App">
        <Header 
          searchOnChange={this.searchOnChange} 
          search={this.search}
        />
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>

                <displaySearch
                  numberOfProducts={this.state.numberOfProducts}
                  getProducts={this.getProducts}
                >
                </displaySearch>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
          <ProductsGrid products={this.state.products}></ProductsGrid>
        </div>
      </div>
    );
  }
}

export default App;

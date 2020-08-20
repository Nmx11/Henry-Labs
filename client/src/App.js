import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// import Nav from './components/Nav.js';
// import Products from './components/Products.js';
// import ProductAdd from './components/ProductAdd.js';
// import ProductEdit from './components/ProductEdit.js';
// import ProductDetail from './components/ProductDetail.js';
// import AddCategory from './components/AddCategory.js';
// import ProductByCategory from './components/ProductByCategory.js';
// import ListCart from './components/ListCart.js';
// import Admin from './components/Admin.js';
// import Usuario from './components/Usuario.js';
// import AddUser from './components/AddUser.js';
// import EditarUsuario from './components/EditarUsuario.js';
// import AdminOrders from './components/AdminOrders.js';
// import OrderDetail from './components/OrderDetail.js';
// import LoginForm from './components/LoginForm.js';


import Nav from './components/Nav.js';
import SearchBar from './components/searchMercado.js';
import Products from './components/Products.js';
import Product from './components/Product.js';



function App() {
  
  return ( 
    <div className="App">
    <Nav />
    <header className="App-header">

       <Route
        exact path='/'
        render={() => <SearchBar/>}
      />

      <Route
        exact path='/producto'
        render={() => <Product/>}
      />

      <Route
        exact path='/catalogo'
        render={() => <Products/>}
      />    
       
  
    
      </header>
    </div>
  );
}
export default App;
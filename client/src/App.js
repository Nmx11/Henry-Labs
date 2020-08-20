import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
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
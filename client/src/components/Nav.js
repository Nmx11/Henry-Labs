import React, { useState, useEffect } from 'react';
import SearchBar from './searchMercado.js';
// import CategoryList from './CategoryList.js';
// import Settings from './Settings.js';
import { connect } from 'react-redux';
// import { getUserLogged } from '../actions/actionsUser.js';

function Nav({ logged, getUserLogged }) {




  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Henry Labs Nahuel</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* <a className="dropdown-item" href="/">Inicio</a> */}
         <a className="dropdown-item" href="/producto">Producto</a>
         
        <SearchBar/>
   
      </div>
    </nav>
  );
};




export default connect(null, {})(Nav);
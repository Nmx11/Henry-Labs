import React, { useEffect } from 'react';
import Product from './Product.js';
// import './Product.css';
import { connect } from 'react-redux';
import { getAll } from '../actions/actionsMercado.js';

function Products({ productos, getAll }) {
  

  return (
    <div className='productsBox'>
      <span>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filtrar
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/mayorprecio">Mayor precio</a>
            <a class="dropdown-item" href="#">Menor precio</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </span>

    <div className='products'>
      {productos.map(p => 
        <Product
          id={p.id}
          title={p.title}
          price = {p.price}
          thumbnail={p.thumbnail}
          currency_id ={p.currency_id}
          condition = {p.condition}
          available_quantity = {p.available_quantity}
        />
      )}
    </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      productos: state.productos.productos
  };
};

export default connect(mapStateToProps, {})(Products);
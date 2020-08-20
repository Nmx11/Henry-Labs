import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { addToCart } from '../actions/actionsCart.js';
import { getAll } from '../actions/actionsMercado.js';
import SearchBar from './searchMercado.js';
import defecto from '../images/default.jpg';
// import './Product.css';
import axios from "axios";


export function Product ({ productos, id, title, price, currency_id, available_quantity, thumbnail, condition, addToCart, logged }) {

  // console.log(productos.productos)

  // productos.map(p =>

  //    console.log(p)
  // )

  // console.log(Object.values(productos))


  useEffect(()=>{getAll()},[getAll])

//   axios.get('http://webcode.me').then(resp => {

//     console.log(resp.data);
// });
  console.log(productos)

  var title = '';
  var price = '';
  var currency_id = '';
  var available_quantity = 0;
  var thumbnail = '';
  var condition = '';
    //   su imagen.
    // su titulo.
    // su precio (con la moneda).
    // su condicion.
    // si tiene stock o no.

  for(let i = 0; i < productos.length; i++){
    if(productos[i].id === 'MLA626730861'){
      title = productos[i].title;
      price = productos[i].price;
      currency_id = productos[i].currency_id;
      available_quantity = productos[i].available_quantity;
      thumbnail = productos[i].thumbnail;
      condition = productos[i].condition;
    }
  }

  return (

    <div>
    <div>
          <SearchBar/>
    </div>

    <div className="card-deck productCard">
    <div className="card">
      <div>

        

        <a href={`http://localhost:3000/producto/detail/${id}`}>
          <img className="card-img-top productView" src={thumbnail || defecto} alt="Product View"/>
        </a>
      </div>
      <div className="card-body">
        <a title="Ver" href={`http://localhost:3000/producto/detail/${id}`}>
          <h6 className="card-title" style={{color: '#000'}}>{title.toUpperCase()}</h6>
        </a>
        <a title="Ver" href={`http://localhost:3000/producto/detail/${id}`}>
          <h6 className="card-title" style={{color: '#000'}}>precio: {price}</h6>
        </a>
        <a title="Ver" href={`http://localhost:3000/producto/detail/${id}`}>
          <h6 className="card-title" style={{color: '#000'}}>moneda: {currency_id}</h6>
        </a>
        <a title="Ver" href={`http://localhost:3000/producto/detail/${id}`}>
          <h6 className="card-title" style={{color: '#000'}}>condicion: {condition}</h6>
        </a>
      </div>
    </div>
  </div>

  </div>
  )
};

const mapStateToProps = (state) => {
  return {
    productos: state.productos
  }
};


export default connect(mapStateToProps)(Product)

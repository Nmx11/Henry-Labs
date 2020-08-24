import React, { useEffect} from 'react';
import { connect } from 'react-redux';
// import { getAll } from '../actions/actionsMercado.js';
import SearchBar from './searchMercado.js';
import defecto from '../images/default.jpg';
import {Card, Button} from 'react-bootstrap';
import './Product.css';
import axios from "axios";
import { Link } from 'react-router-dom'


export function Product ({ productos, id, title, price, currency_id, available_quantity, thumbnail, condition}) {



  return (

    <div>
     
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={thumbnail} style={{ width: '17.9rem', height: '18rem'}}/>
        <Card.Body>
          {/* <Link to={`producto/detail/${id}`}>  */}
            <Card.Title>{title}</Card.Title>
          {/* </Link> */}
          <Card.Text>
            <a title="Ver" >
              <h6 className="card-title" style={{color: '#000'}}>Precio: {price}</h6>
            </a>
            <a title="Ver" >
              <h6 className="card-title" style={{color: '#000'}}>Moneda: {currency_id}</h6>
            </a>
            <a title="Ver" >
              <h6 className="card-title" style={{color: '#000'}}>condición: {condition}</h6>
            </a>
            <a title="Ver" >
              <h6 className="card-title" style={{color: '#000'}}>stock: {available_quantity}</h6>
            </a>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
          <Link to={`producto/detail/${id}`}>
            <Button variant="primary">Ver producto</Button> 
          </Link>
        </Card.Body>
      </Card>
      

{/* 
    <div className="card-deck productCard">
    <div className="card">
      <div>

        

        <a href={`http://localhost:3000/producto/detail/${id}`}>
          <img className="card-img-top productView" src={thumbnail || defecto} alt="Product View"/>
        </a>
      </div>
      <div className="card-body">
        <a title="Ver" href={`http://localhost:3000/producto/detail/${id}`}>
          <h6 className="card-title" style={{color: '#000'}}>{title}</h6>
        </a>
        <a title="Ver" href={`http://localhost:3000/producto/detail/${id}`}>
          <h6 className="card-title" style={{color: '#000'}}>Precio: {price}</h6>
        </a>
        <a title="Ver" href={`http://localhost:3000/producto/detail/${id}`}>
          <h6 className="card-title" style={{color: '#000'}}>Moneda: {currency_id}</h6>
        </a>
        <a title="Ver" href={`http://localhost:3000/producto/detail/${id}`}>
          <h6 className="card-title" style={{color: '#000'}}>condicion: {condition}</h6>
        </a>
        <a title="Ver" href={`http://localhost:3000/producto/detail/${id}`}>
          <h6 className="card-title" style={{color: '#000'}}>stock: {available_quantity}</h6>
        </a>
      </div>
    </div>
    </div> */}

  </div>
  )
};

const mapStateToProps = (state) => {
  return {
    productos: state.productos.productos
  }
};


export default connect(mapStateToProps, {})(Product)

// import React, { useEffect } from 'react';
// import Product from './Product.js';
// // import './Product.css';
// import { connect } from 'react-redux';
// import { getAll } from '../actions/actionsMercado.js';

// function ProductsMayor({ productos, getAll }) {
  
//   useEffect(()=>{getAll()},[getAll])   

// console.log(productos[0])


// // var product = {
// //   title: '',
// //   price: '',
// //   currency_id: '',
// //   available_quantity: 0,
// //   thumbnail: '',
// //   condition: '',

// // };

// // // var title = '';
// // // var price = '';
// // // var currency_id = '';
// // // var available_quantity = 0;
// // // var thumbnail = '';
// // // var condition = '';

// //   //   su imagen.
// //   // su titulo.
// //   // su precio (con la moneda).
// //   // su condicion.
// //   // si tiene stock o no.

// // for(let i = 0; i < productos.length; i++){
// //     product.title = productos[i].title;
// //     product.price = productos[i].price;
// //     product.currency_id = productos[i].currency_id;
// //     product.available_quantity = productos[i].available_quantity;
// //     product.thumbnail = productos[i].thumbnail;
// //     product.condition = productos[i].condition;    

// // }



// // for(let i = 0; i < productos.length; i++){
// //     var menor = productos[0];
// //     var mayor = productos[0];

// //         if(productos[i].price < productos[0]){
// //             menor = productos[i]
// //         }

// // }

// // var selectionSort = function(productos){
// //     for(var i = 0; i < productos.length; i++){
// //       //set min to the current iteration of i
// //       var min = productos[i].price;
// //       for(var j = i+1; j < productos.length; j++){
// //         if(productos[j].price < productos[min].price){
// //          min = productos[j].price;
// //         }
// //       }
// //       var temp = productos[i].price;
// //       productos[i].price = procuctos[min].price;
// //       array[min] = temp;
// //     }
// //     return array;
// //   };
// //   var array = [3,2,10,1]
// //   console.log('selectionSort should return [1,2,3,10]-->',selectionSort(array));

//   return (
//     <div className='productsBox'>
//       <span>
//         <div class="dropdown">
//           <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//             Filtrar
//           </button>
//           <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//             <a class="dropdown-item" href="/mayorprecio">Mayor precio</a>
//             <a class="dropdown-item" href="#">Menor precio</a>
//             <a class="dropdown-item" href="#">Something else here</a>
//           </div>
//         </div>
//       </span>

//     <div className='products'>
//       {productos.map(p => 
//         <Product
//         //   id={p.id}
//         //   title={p.title}
//         //   price = {p.price}
//         //   thumbnail={p.thumbnail}
//         //   currency_id ={p.currency_id}
//         //   condition = {p.condition}
//         //   available_quantity = {p.available_quantity}
//         />
//       )}
//     </div>

//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//       productos: state.productos.productos
//   };
// };

// export default connect(mapStateToProps, {getAll})(ProductsMayor);
const { Router } = require('express');
const { getMercado } = require('./entity.js');

const router = Router();


var myCache = {};

var myQuery = '';

router.get('/', function(req, res) {

    var request = req.query;
    var query = request.query;
    console.log(query)

   

    // function Producto(id, title, price, currency_id, available_quantity, thumbnail, condition) {
    //     this.id = id;
    //     this.title = title;
    //     this.price = price;
    //     this.currency_id = currency_id;
    //     this.available_quantity = available_quantity;
    //     this.thumbnail = thumbnail;
    //     this.condition = condition;
    // }


  
        if(!myCache[query]){

    
            getMercado(query)
                .then(function(r){
                    myQuery = query;

    
                    var productos = [];
    
                    for(let i = 0; i < r.results.length; i++) {
    
                        var id = r.results[i].id;
                        var title = r.results[i].title;
                        var price = r.results[i].price;
                        var currency_id = r.results[i].currency_id;
                        var available_quantity = r.results[i].available_quantity;
                        var thumbnail = r.results[i].thumbnail;
                        var condition = r.results[i].condition;
    
                        // let producto = new Producto(id, title, price, currency_id, available_quantity, thumbnail, condition);
    
                        var obj = {
                            id: id,
                            title: title,
                            price: price,
                            currency_id: currency_id,
                            available_quantity: available_quantity,
                            thumbnail: thumbnail,
                            condition: condition,
                            
                        }  
    
                        productos.push(obj)
                        
                    }
    
                    // console.log(productos)
                    myCache[myQuery] = productos;  
                    
                    console.log(productos)
                    return res.json(myCache[query]);
                })
                
    
        } else {
            console.log(JSON.stringify(myCache))
            return res.json(myCache[query])
         }
    
})


router.get('/producto' , function(req, res) {

    console.log(myCache)
    
    return res.json(myCache[myQuery])
})




module.exports = router;






// router.get('/:idproducto', function(req, res) {
//     var id = req.params.idproducto;
    

//     // console.log(id)
//     // console.log(myCache[myQuery])

//     var product = {};

//     for (let i = 0; i < myCache[myQuery].length; i++){
//         if( id === myCache[myQuery][i].id){
//             product = myCache[myQuery][i];
//         }
//     }
//     // console.log(myQuery)
//     console.log(product)
//     return res.json(product)
  
// })

// router.get('/:idproducto', function(req, res) {

//     var id = req.params.idproducto;

//     for(let i = 0; i < myCache[myQuery].results.length; i++) {

//         if(r.results[i].id === id){
//             var id = myCache[myQuery].results[i].id;
//             var title = myCache[myQuery].results[i].title;
//             var price = myCache[myQuery].results[i].price;
//             var currency_id = myCache[myQuery].results[i].currency_id;
//             var available_quantity = myCache[myQuery].results[i].available_quantity;
//             var thumbnail = myCache[myQuery].results[i].thumbnail;
//             var condition = myCache[myQuery].results[i].condition;
    
//             // let producto = new Producto(id, title, price, currency_id, available_quantity, thumbnail, condition);
    
//             var obj = {
//                 id: id,
//                 title: title,
//                 price: price,
//                 currency_id: currency_id,
//                 available_quantity: available_quantity,
//                 thumbnail: thumbnail,
//                 condition: condition,
                
//             }

//             return res.json(obj)
//         }

//         return res.send("No se ha encontrado el producto")            
//     }
// })
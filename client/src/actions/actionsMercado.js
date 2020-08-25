export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const DETAIL_PRODUCT = 'DETAIL_PRODUCT';
export const GET_MAYOR = 'GET_MAYOR';
export const GET_MENOR = 'GET_MENOR';
export const GET_NEW = 'GET_NEW';
export const GET_USED = 'GET_USED';
export const GET_NEXTPAGE = 'GET_NEXTPAGE';
export const GET_PREVIOUSPAGE = 'GET_NEXTPAGE';



export function onSearch(query) {
    return function (dispatch){
        return fetch(`http://localhost:3001/api/search?query=${query}`)
        .then(res => res.json())
        .then((data) => {

            console.log(data)

            dispatch({ type: SEARCH_PRODUCTS, payload: data })
        })
    }
};

// Buscar todo
export function getAll() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/api/search/producto`, )
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {
                console.log(data)
                dispatch({ type: GET_PRODUCTS, payload: data })
            }
        });
    }
};

export function getMenor() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/api/search/producto`)
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {
                console.log(data)
                

                function selectionSort(data) {
        
                    for(var i = 0; i < data.length; i++){ 
                        var min = i;
                        for(var j = i + 1; j < data.length; j++){
                            if(data[j].price < data[min].price){
                                min = j;
                            }
                          }
                          if(min !== i){
                              var aux = data[i];
                              data[i] = data[min];
                              data[min] = aux;
                          }
                     }
                     return data;
                  
                  }

                dispatch({ type: GET_MENOR, payload: selectionSort(data) })
            }
        });
    }
};

export function getMayor() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/api/search/producto`)
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {
                console.log(data)
                

                function selectionSort(data) {

                    var reversedArray = [];
        
                    for(var i = 0; i < data.length; i++){ 
                        var min = i;
                        for(var j = i + 1; j < data.length; j++){
                            if(data[j].price < data[min].price){
                                min = j;
                            }
                          }
                          if(min !== i){
                              var aux = data[i];
                              data[i] = data[min];
                              data[min] = aux;
                          }
                     }
                     
                     for(var i = 0; i < data.length; i++){
                        reversedArray.unshift(data[i])
                     }

                     return reversedArray;
     
                  }

                dispatch({ type: GET_MAYOR, payload: selectionSort(data) })
            }
        });
    }
};


export function getNew() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/api/search/producto`)
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {
                console.log(data)
                

                    var arrayNew = [];
                
                
                    for(var i = 0; i < data.length; i++){
                      if(data[i].condition === 'new'){
                        arrayNew.push(data[i])
                      }
                    }

                dispatch({ type: GET_NEW, payload: arrayNew })
            }
        });
    }
};

export function getUsed() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/api/search/producto`)
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {
                console.log(data)
                

                    var arrayUsed = [];
                
                
                    for(var i = 0; i < data.length; i++){
                      if(data[i].condition === 'used'){
                        arrayUsed.push(data[i])
                      }
                    }

                    if(arrayUsed < 1){
                        arrayUsed = data;
                    }

                dispatch({ type: GET_USED, payload: arrayUsed })
            }
        });
    }
};

export function previousPage() {
        return function(dispatch) {
            return fetch(`http://localhost:3001/api/search/producto`, )
            .then(res => res.json())
            .then((data) => {
                if (data !== undefined) {
                    console.log(data)
    
                    var arrayPreviousPage = [];
                    
                    
                        for(var i = 0; i < data.length; i++){
    
                                arrayPreviousPage.push(data[i])                      
                            
                        }
    
                    dispatch({ type: GET_PREVIOUSPAGE, payload: arrayPreviousPage })
                }
            });
        }
    };

export function nextPage() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/api/search/producto`, )
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {
                console.log(data)
                
                var arrayNextPage = [];
                
                
                    for(var i = 30; i < data.length; i++){
                    
                        arrayNextPage.push(data[i])
                    
                    }

                dispatch({ type: GET_NEXTPAGE, payload: arrayNextPage })
            }
        });
    }
};


// export function previousPage() {
//     return function(dispatch) {
//         return fetch(`http://localhost:3001/api/search/producto`, )
//         .then(res => res.json())
//         .then((data) => {
//             if (data !== undefined) {
//                 console.log(data)

//                 var arrayPreviousPage = [];
                
                
//                     for(var i = 0; i < data.length; i++){
//                         while(data.length < 30){

//                             arrayPreviousPage.push(data[i])
//                         }
                        
//                     }

//                 dispatch({ type: GET_PREVIOUSPAGE, payload: arrayPreviousPage })
//             }
//         });
//     }
// };

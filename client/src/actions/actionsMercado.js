export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
// export const ADD_PRODUCT = 'ADD_PRODUCT';
// export const EDIT_PRODUCT = 'EDIT_PRODUCT';
// export const DETAIL_PRODUCT = 'DETAIL_PRODUCT';
// export const PRODUCT_BY_CATEGORY = 'PRODUCT_BY_CATEGORY';
// export const ADD_REVIEW = 'ADD_REVIEW';

// //Buscar todo
// export function getAll() {
//         return function(dispatch) {
//             return fetch(`http://localhost:1337/productos`, { credentials: 'include' })
//             .then(res => res.json())
//             .then((data) => {
//                 if (data !== undefined) {
//                     dispatch({ type: GET_PRODUCTS, payload: data })
//                 }
//             });
//         }
// };

export function onSearch(query) {
    return function (dispatch){
        return fetch(`http://localhost:3001/api/search?query=${query}`)
        .then(res => res.json())
        .then((data) => {

            console.log(data)

            // var producto = {}

            // for(let i = 0; i < data.length; i++){
            //     producto = data[i];
            // }

            // console.log(producto)

            dispatch({ type: SEARCH_PRODUCTS, payload: data })
        })
    }
};

//Buscar todo
export function getAll() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/api/search`, )
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {
                console.log(data)
                dispatch({ type: GET_PRODUCTS, payload: data })
            }
        });
    }
};
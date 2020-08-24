export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const DETAIL_PRODUCT = 'DETAIL_PRODUCT';


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

// export function detailProduct(id){
//     return function (dispatch) {
//             return fetch(`http://localhost:3001/api/search/${id}`)
//             .then(res => res.json())
//             .then((data) => {
//                 if(data !== undefined){
//                     dispatch({ type: DETAIL_PRODUCT, payload: data })
//                 }
//             });
//     }
// }
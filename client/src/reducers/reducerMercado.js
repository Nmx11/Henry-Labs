import {
    SEARCH_PRODUCTS,
    GET_PRODUCTS,
    // DETAIL_PRODUCT

} from '../actions/actionsMercado';

const initialState = {
    productos: [],
    // producto: {}
}


export default (state = initialState, action) => {

    if (action.type === SEARCH_PRODUCTS) {
        return {
            ...state,
            productos: action.payload
        };
    }

    if (action.type === GET_PRODUCTS) {
        return {
            ...state,
            productos: action.payload
        };
    }

    // if (action.type === DETAIL_PRODUCT) {
    //     return {
    //         ...state,
    //         producto: action.payload
    //     };
    // }
    

    return state;
};



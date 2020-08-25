import {
    SEARCH_PRODUCTS,
    GET_PRODUCTS,
    GET_MAYOR,
    GET_MENOR,
    GET_NEW,
    GET_USED,
    GET_NEXTPAGE,
    GET_PREVIOUSPAGE,
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

    if (action.type === GET_MAYOR) {
        return {
            productos: action.payload
        };
    }

    if (action.type === GET_MENOR) {
        return {
            productos: action.payload
        };
    }

    if (action.type === GET_NEW) {
        return {
            productos: action.payload
        };
    }

    if (action.type === GET_USED) {
        return {
            productos: action.payload
        };
    }

    if (action.type === GET_PREVIOUSPAGE) {
        return {
            productos: action.payload
        };
    }

    if (action.type === GET_NEXTPAGE) {
        return {
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



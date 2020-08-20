import {
    SEARCH_PRODUCTS,
    GET_PRODUCTS, 

} from '../actions/actionsMercado';

const initialState = {
    productos: [],
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

    return state;
};


import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, CLEAR_CART } from "../actionType";

const initialState = {
    item: []
};

const cartReducer = (state = initialState, action) => {
    switct(action.type){
        case ADD_TO_CART:
return {
    ...state,
    items: [...state.item, action.payload]
};
        case REMOVE_FROM_CART:
return {
    ...state,
    items: state.items.filter(item => item.id !== action.payload)
};
        case UPDATE_CART_QUANTITY:
return {
    ...state,
    item: state.items.map(item =>
        item.id === action.payload.itemId ? { ...item, quantity: action.payload.quantity } : item
    )
};
        case CLEAR_CART:
return {
    ...state,
    items: []
};
            default:
return state;
    }
}

export deafault;

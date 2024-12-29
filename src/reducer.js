import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  DISPLAY_LOADER,
  FETCH_ITEMS,
} from './actions';
import cartItems from './data';

export const initialState = {
  isLoading: false,
  cart: new Map(cartItems.map((cartItem) => [cartItem.id, cartItem])),
};

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };
    default:
      return state;
  }
};

export default reducer;

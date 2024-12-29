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
  cart: new Map(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_LOADER:
      return { ...state, isLoading: true };
    case FETCH_ITEMS:
      return {
        ...state,
        cart: new Map(action.payload.items.map((item) => [item.id, item])),
      };

    case CLEAR_CART:
      return { ...state, cart: new Map() };
    case REMOVE_ITEM:
      const newCart1 = new Map(state.cart);
      newCart1.delete(action.payload.id);
      return { ...state, cart: newCart1 };
    case INCREASE_ITEM:
      const newCart2 = new Map(state.cart);
      const itemId = action.payload.id;
      const item = newCart2.get(itemId);

      item.amount += 1;
      newCart2.set(itemId, item);
      return { ...state, cart: newCart2 };
    case DECREASE_ITEM:
      const newCart3 = new Map(state.cart);
      const itemId2 = action.payload.id;
      const item2 = newCart3.get(itemId2);
      if (item2.amount <= 1) {
        newCart3.delete(itemId2);
        return { ...state, cart: newCart3 };
      }

      item2.amount -= 1;
      newCart3.set(itemId2, item2);
      return { ...state, cart: newCart3 };
    default:
      throw new Error('Unrecognised dispatch action');
  }
};

export default reducer;

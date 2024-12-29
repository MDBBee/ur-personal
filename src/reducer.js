import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  DISPLAY_LOADER,
  FETCH_ITEMS,
} from './actions';
import cartItems from './data';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE_ITEM) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE_ITEM) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    item.amount += 1;
    newCart.set(itemId, item);
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE_ITEM) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    if (item.amount < 2) {
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }

    item.amount -= 1;
    newCart.set(itemId, item);
    return { ...state, cart: newCart };
  }

  if (action.type === DISPLAY_LOADER) {
    return { ...state, isLoading: true };
  }

  if (action.type === FETCH_ITEMS) {
    console.log(action.payload);

    return {
      ...state,
      cart: new Map(action.payload.items.map((item) => [item.id, item])),
      isLoading: false,
    };
  }
  throw new Error('Unrecognised dispatch action');
};
export default reducer;

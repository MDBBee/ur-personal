import { createContext, useContext, useEffect, useReducer } from 'react';
import { calcTotals } from './calcTotal';
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  DISPLAY_LOADER,
  FETCH_ITEMS,
} from './actions';
import reducer from './reducer';
import cartItems from './data';
// cartItems.map((item) => [item.id, item])
export const initialState = {
  isLoading: false,
  cart: new Map(),
};

const AppContext = createContext();
const url = 'https://www.course-api.com/react-useReducer-cart-project';
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalItems, totalCost } = calcTotals(state);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const increaseItem = (id) => {
    dispatch({ type: INCREASE_ITEM, payload: { id } });
  };
  const decreaseItem = (id) => {
    dispatch({ type: DECREASE_ITEM, payload: { id } });
  };

  const fetcItems = async () => {
    dispatch({ type: DISPLAY_LOADER });
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error('Something went wrong!!');
    }
    const items = await data.json();

    dispatch({ type: FETCH_ITEMS, payload: { items } });
  };

  useEffect(() => {
    fetcItems();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        increaseItem,
        decreaseItem,
        removeItem,
        totalItems,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

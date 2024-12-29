import { createContext, useContext, useReducer } from 'react';
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  DISPLAY_LOADER,
  FETCH_ITEMS,
} from './actions';
import { initialState } from './reducer';
import reducer from './reducer';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, increaseItem, decreaseItem, removeItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

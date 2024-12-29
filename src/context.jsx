import { createContext, useContext, useReducer } from 'react';
import cartItems from './data';

const initialState = {
  isLoading: false,
  cart: new Map(cartItems.map((cartItem) => [cartItem.id, cartItem])),
};

const reducer = (state, action) => {};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

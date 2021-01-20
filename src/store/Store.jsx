import { createContext, useReducer } from "react";
import storeReducer from "./StoreReducer";
const initialState = {
  cart: [],
  isFetchLoading: true,
  subTotal: 0,
  total: 0,
  cartQuantity: 0,
};

function Store({ children }) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export const Context = createContext(initialState);
export default Store;

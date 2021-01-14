import { createContext } from "react";

const storeReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_PRODUCTS":
      return {
        isFetchLoading: true,
      };
    case "PRODUCTS":
      return {
        ...state,
        isFetchLoading: false,
        payload: action.payload,
      };
    case "PRODUCTS_ERROR":
      return {
        isFetchError: true,
        message: "Failed on loading products",
      };
    case "CART": {
      return {
        ...state,
        cartQuantity: action.cartQuantity,
        cart: [...action.cart],
        subTotal: action.subTotal,
        total:
          action.subTotal + parseFloat((action.subTotal * 0.065).toFixed()),
        displayHopper: action.displayHopper
      };
    }
    default:
      return {
        state,
      };
  }
};

export default storeReducer;

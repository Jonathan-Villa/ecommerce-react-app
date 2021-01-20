
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

        allProduct: {
          index: "1",
          items: action.payload,
        },
        men: {
          index: "2",
          items: action.payload.filter(
            (item) => "men clothing" === item["category"]
          ),
        },
        women: {
          index: "3",
          items: action.payload.filter(
            (item) => "women clothing" === item["category"]
          ),
        },
        electronics: {
          index: "4",
          items: action.payload.filter(
            (item) => "electronics" === item["category"]
          ),
        },
        jewelery: {
          index: "5",
          items: action.payload.filter(
            (item) => "jewelery" === item["category"]
          ),
        },
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
          action.subTotal + parseFloat((action.subTotal * 0.065).toFixed(2)),
      };
    }
    default:
      return {
        state,
      };
  }
};

export default storeReducer;

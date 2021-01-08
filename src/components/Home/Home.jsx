import { useEffect, useReducer } from "react";

const initialState = { isFetchLoading: true };
const apiReducer = (state, action) => {
  switch (action.type) {
    case "loadingPoducts":
      return {
        isFetchLoading: true,
      };
    case "productsSuccesful":
      return {
        ...state,
        isFetchLoading: false,
        payload: action.payload,
      };
    case "productsError":
      return {
        isFetchError: true,
        message: "Failed to loading products",
      };
    default:
      return { state };
  }
};

function Home() {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();
      return products
        ? dispatch({ type: "productsSuccesful", payload: products })
        : dispatch({ type: "loadingProducts" });
    };

    fetchApi().catch((err) => dispatch({ type: "productsError" }));
  }, []);

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}

export default Home;

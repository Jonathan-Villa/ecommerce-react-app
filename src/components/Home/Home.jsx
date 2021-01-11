import { useEffect, useReducer, useState, useRef } from "react";
import { Grid, Container, Backdrop, CircularProgress } from "@material-ui/core";
import { useStyles } from "./styles";
import { ProductCard } from "../";

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
        message: "Failed on loading products",
      };
    default:
      return { state };
  }
};

function Home({totalItems = 0}) {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(apiReducer, initialState);
  const classes = useStyles();
  const gridItem = useRef();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setOpen(true);
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();
      return products
        ? dispatch({ type: "productsSuccesful", payload: products })
        : dispatch({ type: "loadingProducts" });
    };

    fetchApi().catch((err) => dispatch({ type: "productsError" }));
  }, []);

  const handleCartItems = (title, price, category) => {
    const selected = { title, price, category };
    selected.quantity = 1
    const copyList = [...cart];
    copyList.push(selected);

    totalItems = 1
    setCart(copyList);
  };

  return (

      <Container className={classes.main} maxWidth="lg">
        <Grid container>
          {state.isFetchLoading === true ? (
            <Backdrop className={classes.backDrop} open={open}>
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            <Grid ref={gridItem} container spacing={4}>
              {state.payload.map((m, key) => (
                <Grid
                  style={{ display: "flex", justifyContent: "center" }}
                  key={key}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <ProductCard
                    handleAddCart={handleCartItems}
                    price={m["price"]}
                    title={m["title"]}
                    image={m["image"]}
                    category={m["category"]}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Container>
  );
}

export default Home;

import { useEffect, useState, useContext } from "react";
import { Grid, Container, Backdrop, CircularProgress } from "@material-ui/core";
import { useStyles } from "./styles";
import { ProductCard } from "../";
import { Context } from "../../store/Store";

function Home() {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    const fetchApi = async () => {
      setOpen(true);
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();

      return products
        ? dispatch({ type: "PRODUCTS", payload: products })
        : dispatch({ type: "LOADING_PRODUCTS" });
    };

    fetchApi().catch(() => dispatch({ type: "PRODUCTS_ERROR" }));
  }, [dispatch]);

  const handleCartItems = (title, price, category) => {
    const storeList = [...state.cart];
    const selected = { title, price, category };
    selected.quantity = 1;

    // find duplicate items
    let check = storeList.find((item) => item.title === title);
    // increment by 1 if duplicate found
    if (check) {
      check.quantity += 1;
    } else {
      storeList.push(selected);
    }

    dispatch({
      cartQuantity: state.cartQuantity + 1,
      type: "CART",
      cart: storeList,
      subTotal: state.subTotal + price,
    });
  };

  console.log(state);

  return (
    <Container className={classes.main} maxWidth="lg">
      <Grid container>
        {state.isFetchLoading === true ? (
          <Backdrop className={classes.backDrop} open={open}>
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <Grid container spacing={4}>
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

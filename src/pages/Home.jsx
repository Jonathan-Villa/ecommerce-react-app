import { useEffect, useState, useContext } from "react";
import {
  Grid,
  Container,
  Backdrop,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import { Context } from "../store/Store";
import Tabs from "../components/Tabs/ProductTabs";
import DrawerCart from "../components/Drawer/DrawerCart";

function Home({handleProductLink}) {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useContext(Context);
  const [value, setValue] = useState("1");
  const [openDrawer, setOpenDrawer] = useState(false);
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

  const handleCartItems = (title, price, category, image) => {
    const copyList = [...state.cart];

    const selected = { title, price, category, image };
    selected.quantity = 1;

    // find duplicate items
    let check = copyList.find((item) => item.title === title);
    // increment by 1 if duplicate found
    if (check) {
      check.quantity += 1;
    } else {
      copyList.push(selected);
    }

    dispatch({
      cartQuantity: state.cartQuantity + 1,
      type: "CART",
      cart: copyList,
      subTotal: state.subTotal + price,
    });
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Container className={classes.main} maxWidth="lg">
      <Grid className={classes.homeWrapper} container>
        {state.isFetchLoading === true ? (
          <Backdrop className={classes.backDrop} open={open}>
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <Tabs
            handleProductLink={handleProductLink}
            value={value}
            setValue={setValue}
            handleDrawerToggle={handleDrawerToggle}
            handleCartItems={handleCartItems}
            menProduct={state.men.items}
            womenProduct={state.women.items}
            jewelery={state.jewelery.items}
            electronics={state.electronics.items}
            allProduct={state.allProduct.items}
          />
        )}
      </Grid>
      <DrawerCart
        open={openDrawer}
        items={state.cart}
        handleClose={handleDrawerToggle}
      />
    </Container>
  );
}
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "68px",
    height: "100%",
  },
  homeWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  backDrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
export default Home;

import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import BackDrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Context } from "../store/Store";
import Tabs from "../components/Tabs/ProductTabs";

function Home({ handleProductLink }) {
  const [open, setOpen] = React.useState(false);
  const [state, dispatch] = React.useContext(Context);
  const [value, setValue] = React.useState("1");
  const classes = useStyles();

  React.useEffect(() => {
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

  return (
    <Container className={classes.main} maxWidth="lg">
      <Grid className={classes.homeWrapper} container>
        {state.isFetchLoading === true ? (
          <BackDrop className={classes.backDrop} open={open}>
            <CircularProgress color="inherit" />
          </BackDrop>
        ) : (
          <Tabs
            handleProductLink={handleProductLink}
            value={value}
            setValue={setValue}
            menProduct={state.men.items}
            womenProduct={state.women.items}
            jewelery={state.jewelery.items}
            electronics={state.electronics.items}
            allProduct={state.allProduct.items}
          />
        )}
      </Grid>
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

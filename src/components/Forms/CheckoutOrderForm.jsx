import React from "react";
import { Typography, makeStyles, Container } from "@material-ui/core";
import ShoppingCart from "./ShoppingCartForm";

function CheckOutOrder({ cart = [], store }) {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.shoppingCartWrapper}>
      {!Array.isArray(cart) || !cart.length ? (
        <Typography variant="h5">Shopping bag is empty!</Typography>
      ) : (
        <ShoppingCart cart={cart} title="Shopping Bag" />
      )}
    </Container>
  );
}


const useStyles = makeStyles((theme) => ({
  shoppingCartWrapper: {
    width: "100%",
    paddingLeft: "55px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      display: "none"
    }
  },
}));

export default CheckOutOrder;

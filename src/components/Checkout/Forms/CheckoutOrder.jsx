import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import useStyles from "./stylesCheck";
import ShoppingCart from "./ShoppingCart";

function CheckOutOrder({ cart = [], store }) {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.shoppingCartWrapper}>
      {!Array.isArray(cart) || !cart.length ? (
        <Typography variant="h5">Shopping bag is empty!</Typography>
      ) : (
        <Container disableGutters className={classes.cartWrapper}>
          <Grid item={true} xs={12}>
            <ShoppingCart cart={cart} />
          </Grid>
        </Container>
      )}
    </Container>
  );
}

export default CheckOutOrder;

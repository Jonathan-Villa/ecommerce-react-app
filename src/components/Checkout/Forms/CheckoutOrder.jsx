import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import useStyles from "./stylesCheck";

function CheckOutOrder({ cart = [], store }) {
  const classes = useStyles();

  return (
    <Container className={classes.shoppingCartWrapper}>

      {!Array.isArray(cart) || !cart.length ? (
        <Typography variant="h5">Shopping bag is empty!</Typography>
      ) : (
        cart.map((m, key) => (
          <Container key={key} className={classes.cartWrapper}>
            <Grid
              item
              xs={12}
              sm={12}
              className={classes.productWrapper}
            >
              <img
                className={classes.productImg}
                src={m["image"]}
                alt={m["title"]}
              />
              <Grid className={classes.txtProductWrapper} item={true} xs={12}>
                <span className={classes.txtProductDetail}>
                  {m["title"]}
                </span>
                <span className={classes.txtProductDetail}>
                  {`Quantity: ${m["quantity"]}`}
                </span>
                <span
                  className={classes.txtProductDetail}
                >{`$${m["price"]}`}</span>
              </Grid>
            </Grid>
          </Container>
        ))
      )}
    </Container>
  );
}

export default CheckOutOrder;

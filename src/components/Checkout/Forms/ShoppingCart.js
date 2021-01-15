import React from "react";
import { IconButton, Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

function ShoppingCart({ cart = [] }) {
  const classes = useStyles();
  return (
    <Grid comtainer className={classes.shoppingCartWrapper}>
      {!Array.isArray(cart) || !cart.length ? (
        <h1>Cart is Empty!</h1>
      ) : (
          cart.map((m, key) => (

            <Grid container direction="row" className={classes.cartProductWrapper} >
              <Grid item xs={12} sm={8} className={classes.productImgTitleWrapper}>
                <img
                  className={classes.productImage}
                  src={m["image"]}
                  alt={m["title"]}
                />
                <div
                  style={{
                    height: "fit-content",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    width: "100%",
                    textAlign: "start",
                  }}
                >
                  <Typography className={classes.txtTitle}>{m["title"]}</Typography>
                </div>
              </Grid>

              <Grid item xs={12} sm={4} className={classes.productCountPriceWrapper}>
                <Typography>{m["quantity"]}</Typography>
                <Typography>{m["price"]}</Typography>
              </Grid>


            </Grid>
          ))
        )}
    </Grid>
  );
}

export default ShoppingCart;

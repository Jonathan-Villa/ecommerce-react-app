import React from "react";
import { IconButton, Typography, Grid } from "@material-ui/core";
import { useStyles } from "../styles";

function ShoppingCart({ cart = [] }) {
  const classes = useStyles();
  return (
    <div className={classes.shoppingCartWrapper}>
      {!Array.isArray(cart) || !cart.length ? (
        <h1>Cart is Empty!</h1>
      ) : (
        cart.map((m, key) => (
          <div key={key}>
            <div>
              <img
                className={classes.productImage}
                src={m["image"]}
                alt={m["title"]}
              />
              <div>
                <Typography className={classes.txtTitle}>{m["title"]}</Typography>
              </div>
            </div>

            <div>
              <Typography>{m["quantity"]}</Typography>
              <Typography>{m["price"]}</Typography>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ShoppingCart;

import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

function CheckOutOrder({ cart = [], store }) {
  const classes = useStyles();

  return (
    <div>
      {!Array.isArray(cart) || !cart.length ? (
        <h1>No items have been selected</h1>
      ) : (
        cart.map((m, key) => (
          <Grid container className={classes.productRoot} key={key}>
            <Grid container className={classes.cartProductWrapper}>
              <Grid
                item
                xs={12}
                sm={6}
                className={classes.productImgTitleWrapper}
              >
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
                  <Typography className={classes.txtTitle}>
                    {m["title"]}
                  </Typography>
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                className={classes.productCountPriceWrapper}
              >
                <Typography>{m["quantity"]}</Typography>
                <Typography>{`$${m["price"]}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))
      )}

      <div className={classes.priceWrapper}>
        <Typography>{`Item Count: $${store.cartQuantity}`}</Typography>
        <Typography>{`Subtotal: $${store.subTotal}`}</Typography>
        <Typography>{`Total: $${store.total}`}</Typography>
      </div>
    </div>
  );
}

export default CheckOutOrder;

import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./stylesCheck";

function CheckOutOrder({ cart = [], store }) {
  const classes = useStyles();

  return (
    <Grid xs={12} lg={12} container className={classes.shoppingCartWrapper}>
      {!Array.isArray(cart) || !cart.length ? (
        <Typography variant="h5">Shopping bag is empty!</Typography>
      ) : (
        cart.map((m, key) => (
          <Grid container key={key} className={classes.cartWrapper}>
            <Grid
              item
              xs={12}
              sm={12}
              className={classes.leftBodyImgTitleWrapper}
            >
              <img
                className={classes.leftBodyImg}
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
                <Typography className={classes.txtProductDetail}>
                  {m["title"]}
                </Typography>
                <Typography className={classes.txtProductDetail}>
                  {`Quantity: ${m["quantity"]}`}
                </Typography>
                <Typography
                  className={classes.txtProductDetail}
                >{`$${m["price"]}`}</Typography>
              </div>
            </Grid>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default CheckOutOrder;

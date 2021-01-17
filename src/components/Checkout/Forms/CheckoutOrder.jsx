import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./stylesCheck";
import ContactAccordion from "../../Accordion/AccordionPanels/ContactPanel/ContactPanel";
import PriceForm from "./PriceForm"

function CheckOutOrder({ cart = [], store }) {
  const classes = useStyles();

  return (
    <Grid xs={12} container className={classes.shoppingCartWrapper}>
      {!Array.isArray(cart) || !cart.length ? (
        <h1>No items have been selected</h1>
      ) : (
        cart.map((m, key) => (
          <Grid container key={key} className={classes.cartWrapper}>
            <Grid
              item
              xs={12}
              sm={8}
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
                <Typography className={classes.txtTitle}>
                  {m["title"]}
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={4} className={classes.rightBodyPriceWrapper}>
              <Typography>{m["quantity"]}</Typography>
              <Typography>{`$${m["price"]}`}</Typography>
            </Grid>
          </Grid>
        ))
      )}

      <PriceForm
        cartQuantity={store.cartQuantity}
        subTotal={store.subTotal}
        total={store.total}
      />
    </Grid>
  );
}

export default CheckOutOrder;

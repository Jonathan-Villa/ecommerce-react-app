import React from "react";
import { Grid, Container, Typography, Divider, Paper } from "@material-ui/core";
import useStyles from "./stylesOverview";
import ShoppingCart from "./ShoppingCart";
import PriceForm from "./PriceForm";
import PaymentForm from "./PaymentForm";

function OverviewForm({ payload = [], cart, store }) {
  const classes = useStyles();
  console.log(payload);

  return (
    <Container disableGutters className={classes.root}>
      {!Array.isArray(payload) || !payload.length
        ? null
        : payload.map((m, key) => (
            <Container disableGutters key={key} className={classes.summaryContainer}>
              <PaymentForm />

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Container
                  disableGutters
                  className={classes.summaryGridWrapper}
                >
                  <Grid item xs={12}>
                    <PriceForm
                      cartQuantity={store.cartQuantity}
                      subTotal={store.subTotal.toFixed(2)}
                      total={store.total.toFixed(2)}
                    />

                    <Grid className={classes.addressWrapper} item xs={12}>
                      <Typography
                        className={classes.txtShippingSumHeading}
                        variant="h5"
                      >
                        Shipping Summary
                      </Typography>
                      <Divider variant="fullWidth" />

                      <Typography className={classes.txtShippingToHeading}>
                        Shipping to
                      </Typography>
                      <Grid item xs={12} className={classes.spanWrapper}>
                        <span className={classes.txtSpanName}>
                          {m.firstName} {m.lastName}
                        </span>
                        <span className={classes.txtAddressSpan}>
                          {m.address} <br /> {m.city}, {m.state} {m.zip} <br />
                          {m.phoneNum}
                        </span>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <ShoppingCart cart={cart} title="Your Cart" />
                  </Grid>
                </Container>
              </Grid>
            </Container>
          ))}
    </Container>
  );
}

export default OverviewForm;

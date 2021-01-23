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
    <Container className={classes.root}>
      {!Array.isArray(payload) || !payload.length
        ? null
        : payload.map((m, key) => (
            <Container disableGutters className={classes.summaryContainer}>
              <PaymentForm />

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Container disableGutters className={classes.addressWrapper}>
                  <Grid item xs={12}>
                    <PriceForm
                      cartQuantity={store.cartQuantity}
                      subTotal={store.subTotal.toFixed(2)}
                      total={store.total.toFixed(2)}
                    />

                    <Typography variant="h5">Shipping Summary</Typography>
                    <Divider variant="fullWidth" />

                    <Grid className={classes.groupWrapper} item xs={12}>
                    <Typography variant="h6">
                      Shipping to
                    </Typography>

                      <span className={classes.txtSpanName}>
                        {m.firstName} {m.lastName}
                      </span>
                      <span className={classes.txtAddressSpan}>
                        {m.address} <br /> {m.city}, {m.state} {m.zip} <br />
                        {m.phoneNum}
                      </span>
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

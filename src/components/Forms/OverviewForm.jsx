import React from "react";
import ShoppingCart from "./ShoppingCartForm";
import PriceForm from "./OrderSummaryForm";
import PaymentForm from "./PaymentForm";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

function OverviewForm({ payload = [], cart, store }) {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.root}>
      {!Array.isArray(payload) || !payload.length
        ? null
        : payload.map((m, key) => (
            <Container
              disableGutters
              key={key}
              className={classes.summaryContainer}
            >
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

const useStyles = makeStyles((theme) => ({
  root: {},
  summaryContainer: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  spanWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    boxSizing: "border-box",
    paddingTop: "5px",
    fontSize: ".83rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: ".76rem",
    },
  },
  summaryGridWrapper: {
    padding: "20px 0px",
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
  },
  txtShippingSumHeading: {
    marginTop: "20px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.7rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },

  txtShippingToHeading: {
    marginTop: "10px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: ".98rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: ".90rem",
    },
  },

  txtAddressSpan: {
    lineHeight: "25px",
  },
  txtSpanName: {
    paddingRight: "5px",
    lineHeight: "25px",
  },
}));

export default OverviewForm;

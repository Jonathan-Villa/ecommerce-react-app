import {
  Grid,
  Box,
  Paper,
  Stepper,
  Step,
  Button,
  Typography,
  StepLabel,
} from "@material-ui/core";
import { useState, useReducer, useEffect } from "react";
import { useStyles } from "./styles";
import ShoppingCart from "./Forms/ShoppingCart";
import CheckOutOrder from "./Forms/CheckoutOrder";

const getSteps = [{ label: "Proceed Checkout" }, { label: "Checkout" }];

const initalState = { activeStep: 0 };

const stepStateCount = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { activeStep: action.count + 1 };
    }
    case "DECREMENT": {
      return { activeStep: action.count - 1 };
    }
    case "RESET": {
      return { activeStep: action.count };
    }
    default:
      return state;
  }
};

const stepContent = (index, cart, store) => {
  switch (index) {
    case 0: {
      return <ShoppingCart cart={cart} />;
    }

    case 1: {
      return <CheckOutOrder cart={cart} store={store} />;
    }

    default:
      return "Unknown Step";
  }
};

function Checkout({ cart, store }) {
  const classes = useStyles();
  const [state, dispatch] = useReducer(stepStateCount, initalState);

  // Stepper event handling
  const handleNext = () =>
    dispatch({ type: "INCREMENT", count: state.activeStep });
  const handleBack = () =>
    dispatch({ type: "DECREMENT", count: state.activeStep });
  const handleReset = () =>
    dispatch({ type: "RESET", count: (state.activeStep = 0) });

  return (
    <Grid container className={classes.root}>
      <Grid container xs={12} sm={11} md={11} lg={8} className={classes.mainWrapperCheckOut}>
        <Grid xs={12} item>
          <Stepper activeStep={state.activeStep} alternativeLabel>
            {getSteps.map((m, key) => (
              <Step key={key}>
                <StepLabel>{m.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>

        {state.activeStep === getSteps.length ? (
          <Grid>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Grid>
        ) : (
          <Grid item xs={12} className={classes.displayItemsWrapper}>
            {stepContent(state.activeStep, cart, store)}
            <Grid xs={12} sm={12} md={9} lg={7}>
              <Paper elevation={0} className={classes.paperBtnWrapper}>
                <div className={classes.priceWrapper}>
                  <div className={classes.itemCountWrapper}>
                    <Typography variant="subtitle1">Item Count:</Typography>
                    <Typography variant="subtitle1">{store.cartQuantity}</Typography>
                  </div>
                  <div className={classes.itemCountWrapper}>
                    <Typography variant="subtitle1">Subtotal:</Typography>
                    <Typography variant="subtitle1">${store.subTotal}</Typography>
                  </div>
                  <div className={classes.itemCountWrapper}>
                    <Typography variant="subtitle1">Estimated Total:</Typography>
                    <Typography variant="subtitle1">${store.total}</Typography>
                  </div>
                </div>

                <div className={classes.btnWrapper} >
                <Button
                  fullWidth
                  style={
                    state.activeStep === 0
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  disabled={state.activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {state.activeStep === getSteps.length - 1
                    ? "Finish"
                    : "Checkout"}
                </Button>
                </div>


              </Paper>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default Checkout;

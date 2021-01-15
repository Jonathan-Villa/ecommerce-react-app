import {
  Container,
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

const stepContent = (index, cart, store ) => {
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
    <Container className={classes.root} maxWidth="md">
      <Paper>
        <Stepper activeStep={state.activeStep} alternativeLabel>
          {getSteps.map((m, key) => (
            <Step key={key}>
              <StepLabel>{m.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div>
          {state.activeStep === getSteps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              {stepContent(state.activeStep, cart, store)}
              <div>
                <Button
                  disabled={state.activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {state.activeStep === getSteps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Paper>
    </Container>
  );
}

export default Checkout;

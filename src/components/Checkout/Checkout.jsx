import {
  Grid,
  Stepper,
  Step,
  Button,
  Typography,
  Container,
  StepLabel,
} from "@material-ui/core";
import { useReducer, useState } from "react";
import useStyles from "./styles";
import ShoppingCart from "./Forms/ShoppingCart";
import CheckOutOrder from "./Forms/CheckoutOrder";
import PriceForm from "./Forms/PriceForm";
import BillingForm from "./Forms/BillingForm";
import OverView from "./Forms/OverviewForm";

const getSteps = [
  { label: "Shopping Bag" },
  { label: "Checkout" },
  { label: "Overview" },
];

const initalState = { activeStep: 0 };

const stepStateCount = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { activeStep: action.count + 1 };
    case "DECREMENT":
      return { activeStep: action.count - 1 };
    case "RESET":
      return { activeStep: action.count };
    default:
      return state;
  }
};

const stepContent = (index, cart, store) => {
  switch (index) {
    case 0:
      return <ShoppingCart cart={cart} store={store} title="Shopping Cart" />;
    case 1:
      return <CheckOutOrder cart={cart} store={store} />;
    default:
      return "Unknown Step";
  }
};

function Checkout({ cart, store }) {
  const classes = useStyles();
  const [state, dispatch] = useReducer(stepStateCount, initalState);
  const [input, setInput] = useState({});

  // Stepper event handling
  const handleNext = () =>
    dispatch({ type: "INCREMENT", count: state.activeStep });
  const handleReset = () =>
    dispatch({ type: "RESET", count: (state.activeStep = 0) });

  const handleSubmit = (payload) => {
    setInput(payload);
    dispatch({ type: "INCREMENT", count: state.activeStep });
  };

  return (
    <Container className={classes.root}>
      <Container className={classes.mainWrapperCheckOut}>
        <Grid xs={12} item>
          <Stepper activeStep={state.activeStep} alternativeLabel>
            {getSteps.map((m, key) => (
              <Step key={key}>
                <StepLabel>{m.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>

        {state.activeStep === 2 ? (
          <Grid>
            <OverView payload={[input]} cart={cart} store={store} />
            <Button onClick={handleReset}>Reset</Button>
          </Grid>
        ) : (
          <Container disableGutters className={classes.displayItemsWrapper}>
            {state.activeStep === 0 ? (
              <Grid item md={11} lg={12}>
                {stepContent(state.activeStep, cart, store)}
              </Grid>
            ) : state.activeStep === 1 ? (
              <Grid item sm={12} md={10} lg={9}>
                <BillingForm handleSubmit={handleSubmit} />
              </Grid>
            ) : null}

            <Grid item xs={12} sm={12} md={8} lg={9}>
              <Grid item lg={12} className={classes.paperBtnWrapper}>
                <Grid className={classes.orderSummaryParentWrapper} item xs={12}>
                  <PriceForm
                    cartQuantity={store.cartQuantity}
                    subTotal={store.subTotal.toFixed(2)}
                    total={store.total.toFixed(2)}
                  />
                </Grid>
                <div
                  className={
                    state.activeStep === 1
                      ? classes.btnDeactivate
                      : classes.btnWrapperActive
                  }
                >
                  {state.activeStep === 1 ? null : (
                    <Button
                      className={classes.btnStepper}
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      Continue
                    </Button>
                  )}
                </div>
              </Grid>
              {state.activeStep === 1
                ? stepContent(state.activeStep, cart, store, {
                    title: "Shopping Bag",
                  })
                : null}
            </Grid>
          </Container>
        )}
      </Container>
    </Container>
  );
}

export default Checkout;

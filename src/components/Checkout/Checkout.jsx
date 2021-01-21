import {
  Grid,
  Stepper,
  Step,
  Button,
  Typography,
  Container,
  StepLabel,
} from "@material-ui/core";
import { useReducer } from "react";
import useStyles from "./styles";
import ShoppingCart from "./Forms/ShoppingCart";
import CheckOutOrder from "./Forms/CheckoutOrder";
import PriceForm from "./Forms/PriceForm";
import BillingForm from "./Forms/BillingForm";
const getSteps = [{ label: "Shopping Bag" }, { label: "Checkout" }];

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
      return <ShoppingCart cart={cart} store={store} />;
    case 1:
      return <CheckOutOrder cart={cart} store={store} />;
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
  const handleReset = () =>
    dispatch({ type: "RESET", count: (state.activeStep = 0) });

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

        {state.activeStep === getSteps.length ? (
          <Grid>
            <Typography className={classes.instructions}>
              Comming soon!
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Grid>
        ) : (
          <Container disableGutters className={classes.displayItemsWrapper}>
            {state.activeStep === 0 ? (
              <Grid md={10} lg={9}>
                {stepContent(state.activeStep, cart, store)}
              </Grid>
            ) : state.activeStep === 1 ? (
              <Grid item sm={12} md={10} lg={9}>
                <BillingForm />
              </Grid>
            ) : null}

            <Grid item xs={12} sm={12} md={8} lg={9}>
              <Grid item lg={12} className={classes.paperBtnWrapper}>
                <PriceForm
                  cartQuantity={store.cartQuantity}
                  subTotal={store.subTotal.toFixed(2)}
                  total={store.total.toFixed(2)}
                />
                <div className={classes.btnWrapper}>
                  {state.activeStep === getSteps.length - 1 ? null : (
                    <Button
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
                ? stepContent(state.activeStep, cart, store)
                : null}
            </Grid>
          </Container>
        )}
      </Container>
    </Container>
  );
}

export default Checkout;

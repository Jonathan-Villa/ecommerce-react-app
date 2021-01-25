import {
  Grid,
  Stepper,
  Step,
  Button,
  Container,
  StepLabel,
  makeStyles,
} from "@material-ui/core";
import { useReducer, useState } from "react";
import ShoppingCart from "../components/Forms/ShoppingCartForm";
import CheckOutOrder from "../components/Forms/CheckoutOrderForm";
import PriceForm from "../components/Forms/OrderSummaryForm";
import BillingForm from "../components/Forms/BillingForm";
import OverView from "../components/Forms/OverviewForm";

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
          <Container disableGutters>
            <OverView payload={[input]} cart={cart} store={store} />
            <Button color="primary" variant="contained" onClick={handleReset}>
              Reset
            </Button>
          </Container>
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
                <Grid
                  className={classes.orderSummaryParentWrapper}
                  item
                  xs={12}
                >
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

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "65px",
    display: "flex",
    flexDirection: "column",
    overflow: "none",
    alignItems: "center",
    boxSizing: "border-sizing",
    height: "fit-content",
    paddingBottom: "20px",
    [theme.breakpoints.down("sm")]: {},
  },
  mainWrapperCheckOut: {
    paddingTop: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    position: "relative",
    height: "fit-content",
    [theme.breakpoints.down("md")]: {
      paddingRight: "15px",
      paddingLeft: "15px",
      paddingTop: "26px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
      paddingLeft: "0px",
      paddingTop: "26px",
    },
  },
  displayItemsWrapper: {
    marginTop: "20px",
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },

  orderSummaryParentWrapper: {
    boxSizing: "border-box",
    paddingTop: "0px",
    paddingBottom: "0px",

    [theme.breakpoints.down("sm")]: {},
  },
  orderSummaryWrapper: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("sm")]: {},
  },

  paperBtnWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "55px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
    },
  },
  btnWrapperActive: {
    boxSizing: "border-box",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "0px",
      padding: "20px 0px",
    },
  },
  btnWrapperDeactivate: {
    display: "none",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  productImage: {
    width: "90px",
    objectFit: "contain",
  },
  txtOrderHeading: {
    height: "fit-content",
    fontFamily: "Montserrat, sans-serif",

    fontSize: "1.7rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },
  txtOrderSummary: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    height: "fit-content",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.1rem",

    [theme.breakpoints.down("md")]: {
      fontSize: ".98rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: ".90rem",
    },
  },

  btnStepper: {
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      width: "100%",
    },
  },
}));

export default Checkout;

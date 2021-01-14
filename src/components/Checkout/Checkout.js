import {
  Container,
  Paper,
  Stepper,
  Step,
  Button,
  Typography,
  StepLabel,
} from "@material-ui/core";
import { useState } from "react";
import { useStyles } from "./styles";

const getSteps = [
  {
    label: "Proceed Checkout",
  },
  {
    label: "Checkout",
  },
];

const shoppingCart = (
  <div>
    <h1>ShoppingCart</h1>
  </div>
);

const checkout = (
  <div>
    <h1>Checkout</h1>
  </div>
);

const stepContent = (index) => {
  switch (index) {
    case 0: {
      return shoppingCart;
    }

    case 1: {
      return checkout;
    }

    default:
      return "Unknown step";
  }
};

function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container className={classes.root} maxWidth="md">
      <Paper>
        <Stepper activeStep={activeStep} alternativeLabel>
          {getSteps.map((m, key) => (
            <Step key={key}>
              <StepLabel>{m.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div>
          {activeStep === getSteps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              {stepContent(activeStep)}
              <div>
                <Button
                  disabled={activeStep === 0}
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
                  {activeStep === getSteps.length - 1 ? "Finish" : "Next"}
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

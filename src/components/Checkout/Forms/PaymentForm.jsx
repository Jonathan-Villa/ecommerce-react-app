import { useState } from "react";
import {
  TextField,
  Grid,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Divider,
  FormLabel,
  ThemeProvider,
} from "@material-ui/core";
import useStyles, {theme} from "./stylesPayment";


function PaymentForm() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={9} className={classes.root}>
      <Container className={classes.paymentContainer}>
        <Typography className={classes.txtPaymentHeading} variant="h5">
          Payment
        </Typography>
        <Divider variant="fullWidth" />
        <Grid item className={classes.radioWrapper}>
          <ThemeProvider theme={theme}>
            <FormControl>
              <FormLabel>Select a payment method</FormLabel>

              <RadioGroup>
                <FormControlLabel
                  className={classes.radControlLabel}
                  value="creditCard"
                  label="Credit Card"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  className={classes.radControlLabel}
                  value="payPal"
                  label="Pay Pal"
                  control={<Radio />}
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </ThemeProvider>
        </Grid>

        <Grid item>
          <TextField
            fullWidth
            label="CARD NUMBER"
            className={classes.txtCardNumber}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Grid item className={classes.expiryCvcWrapper}>
            <TextField
              className={classes.txtExpiry}
              label="EXPIRY DATE"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              className={classes.txtCvc}
              label="CVC / CVV"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <TextField
            className={classes.txtHolderName}
            fullWidth
            label="CARDHOLDER NAME"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Container>
    </Grid>
  );
}

export default PaymentForm;

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
} from "@material-ui/core";
import useStyles from "./stylesPayment"

function PaymentForm() {
    const classes = useStyles()
  return (
    <Grid item xs={12} sm={12} md={9} className={classes.root}>
      <Container className={classes.paymentContainer}>
        <Typography variant="h4">Payment</Typography>
        <Divider variant="fullWidth" />
        <Grid item className={classes.radioWrapper}>
          <FormControl>
            <FormLabel >Select a payment method</FormLabel>
            <RadioGroup>
              <FormControlLabel
                label="Credit Card"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                label="Pay Pal"
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item>
          <TextField fullWidth label="CARD NUMBER" />
          <Grid item className={classes.expiryCvcWrapper}>
          <TextField className={classes.txtExpiry} label="EXPIRY DATE" />
          <TextField className={classes.txtCvc} label="CVC / CVV" />
          </Grid>
          <TextField fullWidth label="CARDHOLDER NAME" />
        </Grid>
      </Container>
    </Grid>
  );
}

export default PaymentForm;

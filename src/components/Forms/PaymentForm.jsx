import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import FormLabel from "@material-ui/core/FormControlLabel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

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

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 0px",
  },

  paymentContainer: {
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
      paddingLeft: "0px",
    },
  },

  radioWrapper: {
    marginTop: "10px",
  },

  radControlLabel: {
    MuiFormControlLabelRoot: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "1.1rem",
    },
  },
  txtPaymentHeading: {
    fontSize: "1.7rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },

  txtCardNumber: {
    marginTop: "10px",
  },

  expiryCvcWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  txtExpiry: {
    marginTop: "10px",
    flex: 1,
    marginRight: "10px",
  },
  txtCvc: {
    marginTop: "10px",
    flex: 1,
    marginLeft: "10px",
  },
  txtHolderName: {
    marginTop: "10px",
  },
}));

export default PaymentForm;

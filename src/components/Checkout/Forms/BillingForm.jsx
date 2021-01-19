import { useReducer, createContext } from "react";
import { Grid, TextField, Paper, Typography, Divider } from "@material-ui/core";
import useStyles from "./stylesBilling";

const initalState = {
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  apartment: "",
  city: "",
  country: "",
  state: "",
  zip: "",
  phoneNum: "",
};

const billingReducer = (state, action) => {
  switch (action) {
    case "LOADING_SUBMISSION": {
      return {
        isLoading: true,
      };
    }
    case "SUBMISSION_SUCCESSFULL": {
      return {
        ...state,
        payload: action.payload,
        isLoading: false,
      };
    }
    case "SUBMISSION_FAIL": {
      return {
        isSubmissionFail: true,
      };
    }

    default:
      return state;
  }
};

function BillingForm() {
  const [state, dispatch] = useReducer(billingReducer, initalState);
  const classes = useStyles();

  return (
    <Paper elevation={0}>
      <div>
        <Typography variant="h5">Shipping To</Typography>
      </div>
      <Divider variant="fullWidth" />
      <Grid item xs={12} className={classes.txtGroupWrapper}>
        <TextField
          className={classes.txtField}
          fullWidth
          label="First Name"
          variant="outlined"
          color="primary"
          name="firstName"
          type="text"
        />
        <TextField
          id={classes.txtLastName}
          className={classes.txtField}
          fullWidth
          label="Last Name"
          variant="outlined"
          color="primary"
          name="lastName"
          type="text"
        />
      </Grid>

      <Grid item xs={12} className={classes.addressWrapper}>
        <TextField
          className={classes.txtField}
          fullWidth
          label="Address"
          variant="outlined"
          color="primary"
          name="address"
          type="text"
        />
        <TextField
          className={classes.txtField}
          fullWidth
          label="Apartment, Suite, Etc (optional)"
          variant="outlined"
          color="primary"
          name="apartment"
          type="text"
        />
        <TextField
          className={classes.txtField}
          fullWidth
          label="City"
          variant="outlined"
          color="primary"
          name="city"
          type="text"
        />
        <div className={classes.txtGroupWrapper}>
          <TextField
            className={classes.txtField}
            label="Country"
            fullWidth
            variant="outlined"
            color="primary"
            name="city"
            type="text"
          />
          <TextField
            className={classes.txtField}
            label="State"
            fullWidth
            variant="outlined"
            color="primary"
            name="state"
            type="text"
          />
          <TextField
            className={classes.txtField}
            label="Zip"
            fullWidth
            variant="outlined"
            color="primary"
            name="zip"
            type="number"
          />
        </div>
      </Grid>
      <Grid item xs={12} className={classes.emailPhoneWrapper}>
        <TextField
          className={classes.txtField}
          fullWidth
          label="Email Address"
          type="email"
          variant="outlined"
          color="primary"
          name="emailAddress"
        />
        <TextField
          className={classes.txtField}
          fullWidth
          label="Phone Number"
          type="number"
          variant="outlined"
          color="primary"
          name="phoneNum"
        />
      </Grid>
    </Paper>
  );
}

export const BillingContext = createContext(initalState);
export default BillingForm;

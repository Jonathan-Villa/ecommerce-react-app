import { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import useStyles from "./stylesBilling";

function BillingForm(props) {
  const classes = useStyles();
  const [input, setInput] = useState({
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
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setInput({ ...input, [e.target.name]: value });
  };

  const handleBillSubmit = (e) => {
    e.preventDefault();

    props.handleSubmit(input);

    setInput({
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
    });
  };

  return (
    <form className={classes.root} onSubmit={handleBillSubmit} elevation={0}>
      <div className={classes.headingWrapper}>
        <Typography className={classes.txtBillingHeading} variant="h5">Checkout</Typography>
        <Divider variant="fullWidth" />
      </div>

      <Grid container>
        <Grid xs={12} item className={classes.txtGroupWrapper}>
          <TextField
            required
            size="small"
            onChange={handleChange}
            value={input.firstName}
            className={classes.txtFirstName}
            label="First Name"
            variant="standard"
            color="primary"
            name="firstName"
            type="text"
          />
          <TextField
            size="small"
            required
            onChange={handleChange}
            value={input.lastName}
            className={classes.txtLastName}
            label="Last Name"
            variant="standard"
            color="primary"
            name="lastName"
            type="text"
          />
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.addressWrapper}>
        <TextField
          size="small"
          required
          onChange={handleChange}
          value={input.address}
          className={classes.txtField}
          fullWidth
          label="Address"
          variant="standard"
          color="primary"
          name="address"
          type="text"
        />
        <Grid container>
          <Grid item xs={12} className={classes.txtGroupWrapper}>
            <TextField
              size="small"
              onChange={handleChange}
              value={input.apartment}
              className={classes.txtApartment}
              fullWidth
              label="Apartment, Suite, Etc (optional)"
              variant="standard"
              color="primary"
              name="apartment"
              type="text"
            />
            <TextField
              size="small"
              required
              onChange={handleChange}
              value={input.city}
              className={classes.txtCity}
              fullWidth
              label="City"
              variant="standard"
              color="primary"
              name="city"
              type="text"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.txtGroupWrapper}>
            <TextField
              size="small"
              required
              onChange={handleChange}
              value={input.country}
              className={classes.txtCountry}
              label="Country"
              variant="standard"
              color="primary"
              name="country"
              type="text"
            />
            <TextField
              size="small"
              required
              onChange={handleChange}
              value={input.state}
              className={classes.txtState}
              label="State"
              variant="standard"
              color="primary"
              name="state"
              type="text"
            />
            <TextField
              size="small"
              required
              onChange={handleChange}
              value={input.zip}
              className={classes.txtZip}
              label="Zip"
              variant="standard"
              color="primary"
              name="zip"
              type="number"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.emailPhoneWrapper}>
        <TextField
          size="small"
          required
          onChange={handleChange}
          value={input.email}
          className={classes.txtEmail}
          fullWidth
          label="Email Address"
          type="email"
          variant="standard"
          color="primary"
          name="email"
        />
        <TextField
          size="small"
          required
          onChange={handleChange}
          value={input.phoneNum}
          className={classes.txtPhoneNum}
          fullWidth
          label="Phone Number"
          type="number"
          variant="standard"
          color="primary"
          name="phoneNum"
        />
      </Grid>

      <Button
        className={classes.btnReview}
        variant="contained"
        type="POST"
        color="default"
      >
        Review
      </Button>
    </form>
  );
}

export default BillingForm;

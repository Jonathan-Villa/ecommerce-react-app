import { makeStyles } from "@material-ui/core";

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
      [theme.breakpoints.down("md")]: {
        fontSize: ".98rem",
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: ".90rem",
      },
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

export default useStyles;

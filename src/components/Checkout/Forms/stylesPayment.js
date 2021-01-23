import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
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

  expiryCvcWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  txtExpiry: {
    flex: 1,
    marginRight: "10px",
  },
  txtCvc: {
    flex: 1,
    marginLeft: "10px",
  },
}));

export default useStyles;

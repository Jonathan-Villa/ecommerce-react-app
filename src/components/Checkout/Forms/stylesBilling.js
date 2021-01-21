import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "55px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
      width: "100%"
    }
  },
  headingWrapper: {
    paddingBottom: "10px"
  },
  txtField: {
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  txtGroupWrapper: {
    display: "flex",
    justifyContent: "space-between"
  },
  addressWrapper: {},
  emailPhoneWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "auto"
  },
  txtFirstName: {
    fontFamily: "Montserrat, sans-serif",
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10px",
    flex: 1,
    height: "auto"
  },
  txtLastName: {
    flex: 1,
    marginTop: "10px",
    marginBottom: "10px",
    height: "auto"
  },
  txtState: {
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10px",
    height: "auto"
  },
  txtCity: {
    marginTop: "10px",
    marginBottom: "10px",
    height: "auto",

    [theme.breakpoints.down('xs')]:{
      width:"90%"
    }
  },
  txtApartment: {
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10px",
    height: "auto"
  },
  txtCountry: {
    flex: 1,
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10px",
    height: "auto"
  },
  txtZip: {
    flex: 1,
    marginTop: "10px",
    marginBottom: "10px",
    height: "auto"
  },
  txtEmail: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "55%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  txtPhoneNum: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "40%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  btnReview: {
    marginTop: "20px",
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    }
  }
}));

export default useStyles;

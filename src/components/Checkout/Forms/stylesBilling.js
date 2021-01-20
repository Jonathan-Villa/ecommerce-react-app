import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight:"55px",
    width:"100%",


    [theme.breakpoints.down('md')]:{
      width:"100%"
    },
    [theme.breakpoints.down('sm')]:{
      paddingRight:"0px",
      width:"100%"
    }
  },
  headingWrapper: { paddingBottom: "10px" },
  txtField: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  txtGroupWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  addressWrapper: {},

  emailPhoneWrapper: {},

  txtFirstName: {
    fontFamily: "Montserrat, sans-serif",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "10px",
    flex: 1,
  },

  txtLastName: {
    flex: 1,
    paddingTop: "10px",
    paddingBottom: "10px",
  },

  txtState: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight:"10px"
  },
  txtCity:{
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  txtApartment:{
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight:"10px"
  },

  txtCountry: {
    flex: 1,
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "10px",
  },

  txtZip: {
    flex: 1,
    paddingTop: "10px",
    paddingBottom: "10px",
  },
}));

export default useStyles;

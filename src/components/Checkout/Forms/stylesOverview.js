import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  summaryContainer: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  spanWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    boxSizing: "border-box",
    paddingTop: "5px",
    fontSize: ".83rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: ".76rem",
    },
  },
  summaryGridWrapper: {
    padding: "20px 0px",
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
  },
  txtShippingSumHeading: {
    marginTop: "20px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.7rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },

  txtShippingToHeading: {
    marginTop: "10px",
    
    fontWeight: "bold",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: ".98rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: ".90rem",
    },
  },

  txtAddressSpan: {
    lineHeight: "25px",
  },
  txtSpanName: {
    paddingRight: "5px",
    lineHeight: "25px",
  },
}));

export default useStyles;

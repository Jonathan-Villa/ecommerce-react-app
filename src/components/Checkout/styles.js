import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "65px",
    display: "flex",
    flexDirection: "column",
    overflow: "none",
    alignItems: "center",
    boxSizing: "border-sizing",
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {},
  },
  mainWrapperCheckOut: {
    paddingTop: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    position: "relative",
    height: "fit-content",
    [theme.breakpoints.down("md")]: {
      paddingRight: "15px",
      paddingLeft: "15px",
      paddingTop: "26px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
      paddingLeft: "0px",
      paddingTop: "26px",
    },
  },
  displayItemsWrapper: {
    marginTop: "20px",
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },

  orderSummaryParentWrapper: {
    boxSizing: "border-box",


    [theme.breakpoints.down("sm")]: {
      paddingTop:"20px",
      paddingBottom:"20px",
     
    },
  },
  orderSummaryWrapper: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {},
  },

  paperBtnWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "55px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px"
    },
  },
  btnWrapperActive: {
    boxSizing: "border-box",
    marginTop: "20px",
    padding: "20px",
    display: "flex",
    justifyContent: "center",

    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  btnWrapperDeactivate: {
    display: "none",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  productImage: {
    width: "90px",
    objectFit: "contain",
  },
  txtOrderHeading: {
    height: "fit-content",
    fontFamily: "Montserrat, sans-serif",

    fontSize: "1.7rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },
  txtOrderSummary: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    height: "fit-content",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.1rem",

    [theme.breakpoints.down("md")]: {
      fontSize: ".98rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: ".90rem",
    },
  },

  btnStepper: {
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      width: "100%",
    },
  },
}));

export default useStyles;

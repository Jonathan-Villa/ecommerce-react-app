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
    [theme.breakpoints.down("sm")]: {}
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
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
      paddingLeft: "0px",
      paddingTop: "26px"
    }
  },
  displayItemsWrapper: {
    marginTop: "30px",
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block"
    }
  },
  orderSummaryWrapper: {
    marginTop: "20px",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  txtOrderSummaryWrapper: {
    marginTop: "20px"
  },
  paperBtnWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "55px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      marginTop: "30px"
    }
  },
  btnWrapper: {
    paddingTop: "10px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  productImage: {
    width: "90px",
    objectFit: "contain"
  },
  txtOrderHeading: {
    height: "fit-content",
    fontFamily: "Montserrat, sans-serif"
  },
  txtOrderSummary: {
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    height: "fit-content",
    fontFamily: "Montserrat, sans-serif"
  }
}));

export default useStyles;

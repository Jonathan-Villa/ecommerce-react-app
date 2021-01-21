import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  shoppingCartWrapper: {
    width: "100%",
    paddingLeft: "55px",
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      display: "none"
    }
  },
  cartWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px"
    }
  },
  productWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    marginBottom: "20px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  productImg: {
    width: "90px",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      width: "70px"
    }
  },
  shoppingBagHeading: {
    fontFamily: "Montserrat, sans-serif"
  },
  txtProductWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-end",
      paddingLeft: "20px"
    }
  },
  txtProductDetail: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    width: "100%",
    height: "fit-content",
    marginBottom: "10px",
    lineHeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px"
    }
  }
}));

export default useStyles;

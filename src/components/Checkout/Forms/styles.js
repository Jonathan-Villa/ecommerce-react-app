import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  productRoot: {},
  shoppingCartWrapper: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {}
  },
  cartProductWrapper: {
    marginTop: "20px",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {}
  },
  shoppingBagHeading: {
    fontFamily: "Montserrat, sans-serif"
  },
  productImage: {
    width: "90px",
    objectFit: "contain"
  },
  productImgTitleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    paddingBottom: "40px",
    [theme.breakpoints.down("xs")]: {}
  },
  productTxtWrapper: {
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {}
  },
  txtProductDetail: {
    width: "100%",
    fontSize: "16px",
    paddingBottom: "10px",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: "normal",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      textAlign: "right"
    }
  }
}));

export default useStyles;

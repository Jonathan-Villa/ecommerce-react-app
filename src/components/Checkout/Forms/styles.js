import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  productRoot: {},
  shoppingCartWrapper: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {},
  },
  cartProductWrapper: {
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {},
  },
  shoppingBagHeading: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.7rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },
  productImage: {
    width: "90px",
    objectFit: "contain",
    boxSizing: "border-box",
    padding: "10px ",

    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  productImgTitleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {},
  },
  productTxtWrapper: {
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {},
  },
  txtProductDetail: {
    width: "100%",
    paddingBottom: "10px",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: "normal",
    height: "auto",
    fontSize: "1rem",

    [theme.breakpoints.down("md")]: {
      fontSize: ".98rem",
    },
  },
}));

export default useStyles;

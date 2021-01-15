import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  productRoot: {


  },
  cartProductWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width:"100%",

    padding:"24px",
    [theme.breakpoints.down("xs")]: {

    },
  },
  productImage: {
    width: "90px",
    objectFit: "contain",
  },
  productImgTitleWrapper: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {

    },
  },
  productCountPriceWrapper: {
    display: "inline-flex",
    justifyContent:"space-between",


    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
    },
  },
  priceWrapper:{
    padding:"24px"
  },

  txtTitle: {
    fontSize:"16px",
    width:"100%", 
    height:"fit-content",
    paddingLeft:"10px",

    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
}));

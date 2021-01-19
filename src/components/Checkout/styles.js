import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "65px",
    display: "flex",
    flexDirection: "column",
    overflow: "none",
    alignItems: "center",
    boxSizing: "border-sizing",
    height:"fit-content",

    [theme.breakpoints.down("sm")]: {

    },
  },
  mainWrapperCheckOut: {
    paddingTop: "30px",
    paddingLeft: "60px",
    paddingRight: "60px",
    position: "relative",
    height: "fit-content",

    
    [theme.breakpoints.down("md")]: {
      paddingRight:"15px",
      paddingLeft: "15px",
      paddingTop: "26px",
      width:"100%"

    },

    [theme.breakpoints.down("sm")]: {
      paddingRight:"15px",
      paddingLeft: "15px",
      paddingTop: "26px",
    },
  },
  displayItemsWrapper: {
    marginTop: "80px",
    width: "100%",
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      display:"inline-block",
      marginTop:"55px",
    },
  },

  paperBtnWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "55px",
    
    

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      marginTop:"55px",
    },
  },
  btnWrapper: {
    paddingTop: "10px",
    width:"100%",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  itemCountWrapper: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom:"20px"
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
}));


export default useStyles
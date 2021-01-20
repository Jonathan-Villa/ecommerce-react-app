import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxSizing: "border-box",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",

    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  tabList: {
    paddingTop: "16px",
    paddingBottom: "16px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  tab:{
    
    "&:hover":{
      opacity:"1",
      color:"#ced4da"
    }
  }, 

  tabPanel: {
    width: "100%",
    display: "column",
    justifyContent: "center",
    boxSizing: "border-box",

    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  gridItemWrapper: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;

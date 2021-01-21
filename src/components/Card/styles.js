import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("xs")]: {}
  },
  media: {
    margin: "auto",
    height: "200px",
    maxWidth: "200px",
    boxSizing: "border-box",
    padding: 20,
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      width: "140px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "120px"
    }
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    [theme.breakpoints.down("xs")]: {}
  },
  txtTitle: {
    fontFamily: 'Montserrat, sans-serif',
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px"
    }
  },
  txtPrice: {
    fontFamily: 'Montserrat, sans-serif',
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px"
    }
  },
  btnAddCart: {
    width: "100%",
    backgroundColor: "#000",
    color: "#ffff",
    "&:hover": {
      color: "#000",
      backgroundColor: "#e5e5e5"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75em"
    }
  }
}));

export default useStyles;

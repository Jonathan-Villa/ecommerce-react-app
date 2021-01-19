import { makeStyles } from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    width: drawerWidth,
  },
  listWrapper: {
    width: "auto",
    overflow: "auto",
  },
  listItem: {
    width: "400px",

    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  gridImgWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  gridContainer: {
    paddingRight: 0,
    paddingLeft: 0,
    display: "flex",
    justifyContent: "space-between",
  },

  gridItem: {
    width: "100%",
  },

  productImg: {
    width: "100px",
    objectFit: "contain",
    boxSizing: "border-box",
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      width: "80px",
    },
  },
  txtList: {
    paddingLeft: 10,
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  btnViewCart: {
    borderRadius: 0,
    backgroundColor: "#000",
    color: "#ffff",

    "&:hover": {
      color: "#000",
      backgroundColor: "#e5e5e5",
    },
    [theme.breakpoints.down("sm")]: {},
  },
}));

export default useStyles;

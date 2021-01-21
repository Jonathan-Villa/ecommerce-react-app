import { makeStyles } from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    width: drawerWidth,
    height: "auto"
  },
  listWrapper: {
    width: "auto",
    height: "auto ",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      overflow: "auto"
    }
  },
  listItem: {
    width: "400px",
    maxHeight: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "300px"
    }
  },
  gridImgWrapper: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    width: "auto",
    maxHeight: "150px",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      margin: "auto",
      width: "auto"
    }
  },
  gridContainer: {
    paddingRight: 0,
    paddingLeft: 0,
    display: "flex",
    justifyContent: "space-between"
  },
  gridItem: {
    width: "100%"
  },
  productImg: {
    position: "static",
    maxWidth: "110px",
    objectFit: "cover",
    boxSizing: "border-box",
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      height: "auto",
      margin: "auto"
    }
  },
  txtList: {
    paddingLeft: 10,
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px"
    }
  },
  btnViewCart: {
    borderRadius: 0,
    backgroundColor: "#000",
    color: "#ffff",
    "&:hover": {
      color: "#000",
      backgroundColor: "#e5e5e5"
    },
    [theme.breakpoints.down("sm")]: {}
  }
}));

export default useStyles;

import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

function DrawerCart({ items, open, handleClose, handleCloseDrawer }) {
  const classes = useStyles();

  return (
    <>
      <Drawer
        className={classes.root}
        anchor="right"
        open={open}
        onClose={handleClose}
      >
        <div>
          <IconButton onClick={handleClose}>
            <MdClose />
          </IconButton>
        </div>
        <Divider variant="fullWidth" />
        <List className={classes.listWrapper}>
          {items.map((m, key) => (
            <div key={key}>
              <ListItem key={key} className={classes.listItem}>
                <Grid container className={classes.gridContainer}>
                  <Grid className={classes.gridImgWrapper} item xs={3} lg={3}>
                    <img
                      className={classes.productImg}
                      src={m["image"]}
                      alt={m["title"]}
                    />
                  </Grid>
                  <Grid item xs={8} sm={8} lg={8} className={classes.gridItem}>
                    <Typography className={classes.txtList}>
                      {m["title"]}
                    </Typography>
                    <Typography className={classes.txtList}>
                      {`$${m["price"]}`}
                    </Typography>
                    <Typography className={classes.txtList}>
                      {m["quantity"] < 1
                        ? `${m["quantity"]} Items`
                        : `${m["quantity"]} Item`}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>

              <Divider variant="fullWidth" component="li" />
            </div>
          ))}
        </List>

        <Button
          className={classes.btnViewCart}
          onClick={handleCloseDrawer}
          component={Link}
          to="/cart"
        >
          View Cart
        </Button>
      </Drawer>
    </>
  );
}

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    width: drawerWidth,
    height: "auto",
  },
  listWrapper: {
    width: "auto",
    height: "auto ",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      overflow: "auto",
    },
  },
  listItem: {
    width: "400px",
    maxHeight: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
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
      width: "auto",
    },
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
    position: "static",
    maxWidth: "110px",
    objectFit: "cover",
    boxSizing: "border-box",
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      height: "auto",
      margin: "auto",
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

export default DrawerCart;

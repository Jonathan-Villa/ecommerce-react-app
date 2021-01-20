import React from "react";
import {
  Drawer,
  List,
  ListItem,
  Typography,
  Divider,
  Grid,
  IconButton,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

function DrawerCart({ items, open, handleClose }) {
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

        <Button className={classes.btnViewCart} component={Link} to="/cart">
          View Cart
        </Button>
      </Drawer>
    </>
  );
}

export default DrawerCart;

import { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import useStyles from "./styles";
import PriceForm from "./PriceForm";

function ShoppingCart({ cart = [], store }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  const handleClick = () => {
    setOpen(true);
  };


  return (
    <Grid comtainer xs={12} className={classes.shoppingCartWrapper}>
      {!Array.isArray(cart) || !cart.length ? (
        <h1>Cart is Empty!</h1>
      ) : (
        cart.map((m, key) => (
          <Grid container key={key} className={classes.cartProductWrapper}>
            <Grid
              item
              xs={12}
              sm={8}
              className={classes.productImgTitleWrapper}
            >
              <img
                className={classes.productImage}
                src={m["image"]}
                alt={m["title"]}
              />
              <div
                style={{
                  height: "fit-content",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  width: "100%",
                  textAlign: "start",
                }}
              >
                <Typography className={classes.txtTitle}>
                  {m["title"]}
                </Typography>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}
              className={classes.productCountPriceWrapper}
            >
              <List>
                <ListItem value={key} button onClick={() => handleClick(key)}>
                  <ListItemText primary={m["quantity"]} />
                </ListItem>

                {open ? (
                  <Collapse in={true} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((m, key) => (
                        <ListItem button key={key} >
                          <ListItemText primary={m} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                ) : null}
              </List>
              <Typography>{`$${m["price"]}`}</Typography>
            </Grid>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default ShoppingCart;

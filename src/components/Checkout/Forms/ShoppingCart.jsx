import { Typography, Grid, Divider } from "@material-ui/core";
import useStyles from "./styles";

function ShoppingCart({ cart = [], store }) {
  const classes = useStyles();

  return (
    <Grid comtainer  className={classes.shoppingCartWrapper}>
      {!Array.isArray(cart) || !cart.length ? (
        <>
          <Typography variant="h5">Cart is Empty!</Typography>
          <Divider variant="fullWidth" />
        </>
      ) : (
        cart.map((m, key) => (
          <Grid container key={key} className={classes.cartProductWrapper}>
            <Grid
              item
              xs={12}
              sm={8}
              lg={7}
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
              <div>
                <Typography className={classes.txtQuantity}>
                  {m["quantity"]}
                </Typography>
              </div>
              <Typography
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >{`$${m["price"]}`}</Typography>
            </Grid>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default ShoppingCart;

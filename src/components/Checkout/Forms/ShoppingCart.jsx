import {
  Typography,
  Grid,
  Divider,
  Container,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import PriceForm from "./PriceForm";

function ShoppingCart({ cart = [], store, title, handleNext }) {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.shoppingCartWrapper}>
      {!Array.isArray(cart) || !cart.length ? (
        <>
          <Typography variant="h5">Cart is Empty!</Typography>
          <Divider variant="fullWidth" />
        </>
      ) : (
        <Container disableGutters className={classes.cartProductWrapper}>
          <div style={{ marginBottom: "10px" }}>
            <Typography className={classes.shoppingBagHeading} variant="h5">
              {title}
            </Typography>
            <Divider variant="fullWidth" />
          </div>
          {cart.map((m, key) => (
            <Grid
              item
              key={key}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.productImgTitleWrapper}
            >
              <img
                className={classes.productImage}
                src={m["image"]}
                alt={m["title"]}
              />
              <Grid xs={12} item className={classes.productTxtWrapper}>
                <span className={classes.txtProductDetail}>{m["title"]}</span>

                <span className={classes.txtProductDetail}>
                  Quantity: {m["quantity"]}
                </span>

                <span className={classes.txtProductDetail}>
                  {`$${m["price"]}`}
                </span>
              </Grid>
            </Grid>
          ))}
        </Container>
      )}
    </Container>
  );
}

export default ShoppingCart;

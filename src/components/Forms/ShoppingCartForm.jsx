import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

function ShoppingCart({ cart = [], store, title }) {
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

const useStyles = makeStyles((theme) => ({
  productRoot: {},
  shoppingCartWrapper: {
    width: "100%",

    [theme.breakpoints.down("sm")]: {},
  },
  cartProductWrapper: {
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {},
  },
  shoppingBagHeading: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.7rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },
  productImage: {
    width: "90px",
    objectFit: "contain",
    boxSizing: "border-box",
    padding: "10px ",

    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  productImgTitleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {},
  },
  productTxtWrapper: {
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {},
  },
  txtProductDetail: {
    width: "100%",
    paddingBottom: "10px",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: "normal",
    height: "auto",
    fontSize: "1rem",

    [theme.breakpoints.down("md")]: {
      fontSize: ".98rem",
    },
  },
}));

export default ShoppingCart;



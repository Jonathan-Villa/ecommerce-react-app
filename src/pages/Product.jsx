import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

function Product({ handleCart, handleDrawer }) {
  const classes = useStyles();
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    const getProduct = () => {
      setProduct(JSON.parse(localStorage.getItem("selectProduct")));
    };

    getProduct();
  }, []);

  return (
    <Container className={classes.root} maxWidth="md">
      <Container disableGutters className={classes.contentWrapper}>
        <Grid className={classes.imgTitleWrapper} item xs={12} md={6} lg={8}>
          <img
            className={classes.imgProduct}
            src={product.image}
            alt={product.title}
          />
        </Grid>

        <Grid
          className={classes.productRightWrapper}
          item
          xs={12}
          md={5}
          lg={6}
        >
          <Container
            disableGutters
            className={classes.productRightInnerContainer}
          >
            <div className={classes.txtWrapper}>
              <Typography
                className={classes.txtProduct}
                variant="h6"
                align="left"
              >
                {product.title}
              </Typography>
              <Typography
                className={classes.txtPrice}
                variant="subtitle1"
                align="left"
              >
                ${product.price}
              </Typography>
            </div>
            <div className={classes.divider}>
              <Divider variant="fullWidth" />
            </div>
            <div className={classes.listSizeWrapper}>
              <List className={classes.ulList}>
                {sizeList.map((m, key) => (
                  <ListItem button variant="outlined" key={key}>
                    <span className={classes.sizeSpan}>{m.size}</span>
                  </ListItem>
                ))}
              </List>
            </div>

            <div className={classes.btnWrapper}>
              <Button
                className={classes.btnAddToBag}
                fullWidth
                variant="contained"
                onClick={() =>
                  handleCart(
                    product.title,
                    product.price,
                    product.category,
                    product.image
                  ) || handleDrawer()
                }
              >
                ADD TO BAG
              </Button>
            </div>
          </Container>
        </Grid>
      </Container>
    </Container>
  );
}

const sizeList = [
  { size: "XS" },
  { size: "S" },
  { size: "M" },
  { size: "L" },
  { size: "XL" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: "fit-content",
    marginTop: "68px",
    display: "flex",
  },

  contentWrapper: {
    height: "100%",
    paddingTop: "60px",
    display: "flex",
    width: "100%",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  productRightWrapper: {
    boxSizing: "border-box",
  },

  productRightInnerContainer: {
    display: "flex",
    flexDirection: "column ",
    justifyContent: "space-between",
    height: "100%",
  },

  txtWrapper: {
    flex: 1,
    lineHeight: "normal",
    display: "flex",
    flexDirection: "column",
  },

  listSizeWrapper: {
    flex: 1,

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "flex-start",
    },
  },

  imgTitleWrapper: {
    display: "flex",
    justifyContent: "flex-start",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },

    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  imgProduct: {
    boxSizing: "border-box",
    height: "350px",
    width: "100%",
    maxWidth: "400px",
    padding: "10px",
    objectFit: "contain",
    marginBottom: "0px",

    [theme.breakpoints.down("md")]: {
      height: "300px",
    },

    [theme.breakpoints.down("xs")]: {
      marginBottom: "10px",
    },
  },

  ulList: {
    display: "flex",
    width: "100%",

    [theme.breakpoints.down("xs")]: {
      width: "fit-content",
    },
  },

  sizeSpan: {
    width: "100%",
    textAlign: "center",

    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },
  txtProduct: {
    width: "100%",
    fontFamily: "Montserrat, sans-serif",
    height: "fit-content",
    fontSize: "1.5rem",
    marginBottom: "10px",
    boxSizing: "border-box",
    paddingLeft: "0px",
    textAlign: "left",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",
      paddingLeft: "0px",
      flex: 0,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      paddingLeft: "16px",
    },
  },

  txtPrice: {
    width: "100%",
    fontFamily: "Montserrat, sans-serif",
    flex: 1,
    height: "fit-content",
    fontSize: "1.2rem",
    marginBottom: "10px",
    paddingLeft: "0px",
    boxSizing: "border-box",

    [theme.breakpoints.down("md")]: {
      fontSize: "1.0rem",
      paddingLeft: "0px",
      flex: 0,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      paddingLeft: "16px",
    },
  },
  btnWrapper: {
    boxSizing: "border-box",
    width: "100%",
    padding: "0px",
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
    },
  },

  btnAddToBag: {
    width: "100%",
    backgroundColor: "#000",
    color: "#ffff",
    "&:hover": {
      color: "#000",
      backgroundColor: "#e5e5e5",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75em",
    },
  },

  divider: {
    width: "100%",
    height: "fit-content",
    boxSizing: "border-box",
    paddingLeft: "0px",
    paddingRight: "0px",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "16px",
      paddingRight: "16px",
    },
  },
}));

export default Product;

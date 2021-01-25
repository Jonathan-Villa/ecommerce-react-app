import { useEffect, useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";

function Product() {
  const classes = useStyles();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = () => {
      setProduct(JSON.parse(localStorage.getItem("selectProduct")));
    };

    getProduct();
  }, []);

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid className={classes.imgTitleWrapper} item lg={6}>
        <img
          className={classes.imgProduct}
          src={product.image}
          alt={product.title}
        />
      </Grid>

      <Grid className={classes.productRightWrapper} item lg={6}>
        <span>{product.title}</span>
        <span>{product.price}</span>
        <span>{product.category}</span>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px",
    marginTop: "68px",
    display: "flex",
  },
  productRightWrapper: {
    display: "flex",
    flexDirection: "column",
  },

  imgTitleWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  imgProduct: {
    boxSizing: "border-box",
    height: "350px",
    maxWidth: "400px",
    padding: "20px",
    objectFit: "contain",
  },
}));

export default Product;

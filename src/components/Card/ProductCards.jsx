import { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from "@material-ui/core";
import { default as useStyles } from "./styles";

function ProductCards({
  image,
  price,
  description,
  title,
  category,
  handleAddCart,
}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className={classes.media}
        title={title}
      />

      <CardContent className={classes.content}>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textPrimary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" size="small" onClick={()=>handleAddCart(title,price,category)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCards;

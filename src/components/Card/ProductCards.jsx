import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { default as useStyles } from "./styles";

function ProductCards({
  image,
  price,
  description,
  handleDrawer,
  title,
  category,
  handleAddCart,
}) {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.root}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className={classes.media}
        title={title}
      />

      <CardContent className={classes.content}>
        <Typography
          
          className={classes.txtTitle}
          variant="subtitle1"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          className={classes.txtPrice}
          variant="subtitle1"
          color="textPrimary"
        >
          {`$${price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.btnAddCart}
          variant="text"
          size="small"
          onClick={(e) =>
            handleAddCart(title, price, category, image) || handleDrawer()
          }
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProductCards;

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CircularProgress,

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
          {`$${price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          size="small"
          onClick={(e) => handleAddCart(title, price, category, image) || handleDrawer() }
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProductCards;

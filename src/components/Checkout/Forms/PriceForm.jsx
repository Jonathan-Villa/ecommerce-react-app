import { Typography, Divider } from "@material-ui/core";
import useStyles from "../styles";

function PriceForm({ cartQuantity, subTotal, total }) {
  const classes = useStyles();
  return (
    <div className={classes.priceWrapper}>
      <div>
        <Typography variant="h5">Order Summary</Typography>
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.itemCountWrapper}>
        <Typography variant="subtitle1">Item Count:</Typography>
        <Typography variant="subtitle1">{cartQuantity}</Typography>
      </div>
      <div className={classes.itemCountWrapper}>
        <Typography variant="subtitle1">Subtotal:</Typography>
        <Typography variant="subtitle1">${subTotal}</Typography>
      </div>
      <div className={classes.itemCountWrapper}>
        <Typography variant="subtitle1">Estimated Total:</Typography>
        <Typography variant="subtitle1">${total}</Typography>
      </div>
    </div>
  );
}

export default PriceForm;

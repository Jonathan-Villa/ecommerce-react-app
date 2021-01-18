import { Typography, Button } from "@material-ui/core";
import useStyles from "../styles";

function PriceForm({
  cartQuantity,
  subTotal,
  total,

}) {
  const classes = useStyles();
  return (
    <div className={classes.priceWrapper}>
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

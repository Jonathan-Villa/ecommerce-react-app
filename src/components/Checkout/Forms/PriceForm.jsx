import { Typography, Divider, Container, Grid } from "@material-ui/core";
import useStyles from "../styles";

function PriceForm({ cartQuantity, subTotal, total }) {
  const classes = useStyles();
  return (
    <Container disableGutters className={classes.orderSummaryWrapper}>
      <div>
        <Typography className={classes.txtOrderHeading} variant="h5">
          Order Summary
        </Typography>
      </div>
      <Divider variant="fullWidth" />
      <Container disableGutters className={classes.txtOrderSummaryWrapper}>
        <Grid x={12} item className={classes.txtOrderSummary}>
          <span>Item Count:</span>
          <span>{cartQuantity}</span>
        </Grid>

        <Grid x={12} item className={classes.txtOrderSummary}>
          <span>Subtotal:</span>
          <span>${subTotal}</span>
        </Grid>
        <Grid x={12} item className={classes.txtOrderSummary}>
          <span>Estimated Total:</span>
          <span>${total}</span>
        </Grid>
      </Container>
    </Container>
  );
}

export default PriceForm;

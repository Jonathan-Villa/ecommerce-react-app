import {
  Typography,
  Divider,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
  orderSummaryWrapper: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("sm")]: {},
  },
  txtOrderHeading: {
    height: "fit-content",
    fontFamily: "Montserrat, sans-serif",

    fontSize: "1.7rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },
  txtOrderSummary: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    height: "fit-content",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.1rem",

    [theme.breakpoints.down("md")]: {
      fontSize: ".98rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: ".90rem",
    },
  },
}));

export default PriceForm;

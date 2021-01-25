import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  ButtonBase,
} from "@material-ui/core";

function ProductCards({
  image,
  price,
  handleDrawer,
  title,
  category,
  handleAddCart,
  handleClick, 
  handleDialogContent
}) {
  const classes = useStyles();

  return (


    <Card elevation={0} className={classes.root}>
      <ButtonBase onClick={()=>  handleClick() || handleDialogContent(title, price, category, image)}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          className={classes.media}
          title={title}
        />
      </ButtonBase>

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

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("xs")]: {},
  },
  media: {
    margin: "auto",
    height: "200px",
    maxWidth: "200px",
    boxSizing: "border-box",
    padding: 20,
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      width: "140px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "120px",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    [theme.breakpoints.down("xs")]: {},
  },
  txtTitle: {
    fontFamily: "Montserrat, sans-serif",
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  txtPrice: {
    fontFamily: "Montserrat, sans-serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  btnAddCart: {
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
}));
export default ProductCards;

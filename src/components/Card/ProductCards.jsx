import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";

function ProductCards({
  image,
  price,
  title,
  category,
  description,
  handleProductLink,
}) {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.root}>
      {image ? (
        <CardMedia
          component="img"
          image={image}
          alt={title}
          className={classes.media}
          title={title}
        />
      ) : (
        <Skeleton variant="rect" height={200} width="100%" />
      )}

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
          component={Link}
          to="/product"
          size="small"
          onClick={(e) =>
            handleProductLink(title, price, category, image, description)
          }
        >
          VIEW ITEM
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
  btnBase: {
    display: "flex",
    justifyContent: "center",
  },
  media: {
    backgroundColor: "transparent",
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

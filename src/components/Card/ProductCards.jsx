import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { default as useStyles } from "./styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {createContext, useReducer} from "react"

const initialState = {onClick(){}}

const productCardReducer = (state, action)=> {
      switch(action.type){
        
        case "ADD_CART":{
          return {
            ...state,
            onClick: action.clickBtn
          }
        }

        default:{return state}
      }
}

function ProductCards({
  image,
  price,
  description,
  title,
  category,
  handleAddCart,
  placement,
  handlePopperDisplay
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
          onClick={(newPlacement) => handleAddCart(title, price, category, newPlacement.currentTarget) }
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export const CardContext = createContext(initialState)
export default ProductCards;

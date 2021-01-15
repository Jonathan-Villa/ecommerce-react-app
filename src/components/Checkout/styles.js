import {makeStyles} from "@material-ui/core"


export const useStyles = makeStyles((theme)=> ({
    root: {
        marginTop:"65px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        overflow:"auto"
      },
      paper:{
        margin:"40px",
        position:"relative",
        height:"fit-content",
        width:"80%",
      },
      backButton: {
        marginRight: theme.spacing(1),
      },
      instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
      shoppingCartWrapper: {
        display:"flex"
      },
      productImage:{
        width:"90px", 
        objectFit:"contain"
      }
}))
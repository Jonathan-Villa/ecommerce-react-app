import {makeStyles} from "@material-ui/core"


export const useStyles = makeStyles((theme)=> ({
    root: {
        marginTop:"100px"
      },
      backButton: {
        marginRight: theme.spacing(1),
      },
      instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
}))
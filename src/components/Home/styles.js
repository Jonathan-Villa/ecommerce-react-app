import {makeStyles} from "@material-ui/core"


export const useStyles = makeStyles((theme)=> ({
    main:{
        marginTop:"100px"
    },
    homeWrapper:{
        display:"flex",
        flexDirection:"column"
    },
    backDrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff"
    },

}))


import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles(()=> ({
    root:{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        maxHeight:"400px",
        maxWidth:345
    },
    media:{
        margin:"auto",
        width: "70%",
        height: "170px",
        objectFit: "contain",
        paddingTop: "8%",
    },
    content:{
        flexGrow:1
    }
}))



export default useStyles
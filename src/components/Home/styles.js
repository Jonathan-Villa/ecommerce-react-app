import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "68px",
    height: "100%",
  },
  homeWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  backDrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

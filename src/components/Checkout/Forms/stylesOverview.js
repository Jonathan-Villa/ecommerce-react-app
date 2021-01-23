import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  summaryContainer: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  groupWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
  },
  addressWrapper: {
    padding: "20px ",
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
  },

  txtAddressSpan: {
    lineHeight: "25px",
  },
  txtSpanName: {
    paddingRight: "5px",
    lineHeight: "25px",
  },
}));

export default useStyles;

import TabPanel from "@material-ui/lab/TabPanel";
import TabList from "@material-ui/lab/TabList";
import TabContext from "@material-ui/lab/TabContext";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Fade from "@material-ui/core/Fade";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ProductCard from "../Card/ProductCards";

function ProductTabs({
  value,
  setValue,
  allProduct,
  menProduct,
  womenProduct,
  electronics,
  jewelery,
  handleCartItems,
  handleDrawerToggle,
  setOpen,
  handleDialogContent,
  handleProductLink,
}) {
  const classes = useStyles();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Toolbar className={classes.root}>
      <TabContext value={value}>
        <TabList
          indicatorColor="primary"
          textColor="primary"
          scrollButtons="on"
          variant="scrollable"
          className={classes.tabList}
          value={value}
          onChange={handleChange}
          aria-label="Product Tabs"
        >
          <Tab className={classes.tab} value="1" label={"All"} />
          <Tab className={classes.tab} value="2" label={"Men clothing"} />
          <Tab className={classes.tab} value="3" label={"Women clothing"} />
          <Tab className={classes.tab} value="4" label={"Electronics"} />
          <Tab className={classes.tab} value="5" label={"Jewelery"} />
        </TabList>

        <TabPanel className={classes.tabPanel} value={"1"}>
          <Grid container spacing={1}>
            {allProduct.map((m, key) => (
              <Fade key={key} in={true} timeout={{ enter: 1300, exit: 1000 }}>
                <Grid
                  className={classes.gridItemWrapper}
                  item
                  key={key}
                  xs={6}
                  sm={6}
                  md={4}
                >
                  <ProductCard
                    handleProductLink={handleProductLink}
                    handleDialogContent={handleDialogContent}
                    handleClick={handleClick}
                    handleDrawer={handleDrawerToggle}
                    handleAddCart={handleCartItems}
                    price={m["price"]}
                    title={m["title"]}
                    image={m["image"]}
                    description={m["description"]}
                    category={m["category"]}
                  />
                </Grid>
              </Fade>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel className={classes.tabPanel} value={"2"}>
          <Grid container spacing={2}>
            {menProduct.map((m, key) => (
              <Fade in={true} key={key} timeout={{ enter: 1300, exit: 1000 }}>
                <Grid
                  key={key}
                  className={classes.gridItemWrapper}
                  item
                  xs={6}
                  sm={6}
                  md={4}
                >
                  <ProductCard
                    handleProductLink={handleProductLink}
                    handleDialogContent={handleDialogContent}
                    handleClick={handleClick}
                    handleDrawer={handleDrawerToggle}
                    handleAddCart={handleCartItems}
                    price={m["price"]}
                    title={m["title"]}
                    image={m["image"]}
                    description={m["description"]}
                    category={m["category"]}
                  />
                </Grid>
              </Fade>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel className={classes.tabPanel} value={"3"}>
          <Grid container spacing={2}>
            {womenProduct.map((m, key) => (
              <Fade key={key} in={true} timeout={{ enter: 1300, exit: 1000 }}>
                <Grid
                  className={classes.gridItemWrapper}
                  item
                  key={key}
                  xs={6}
                  sm={6}
                  md={4}
                >
                  <ProductCard
                    handleProductLink={handleProductLink}
                    handleDialogContent={handleDialogContent}
                    handleClick={handleClick}
                    handleDrawer={handleDrawerToggle}
                    handleAddCart={handleCartItems}
                    price={m["price"]}
                    title={m["title"]}
                    image={m["image"]}
                    description={m["description"]}
                    category={m["category"]}
                  />
                </Grid>
              </Fade>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel className={classes.tabPanel} value={"4"}>
          <Grid container spacing={2}>
            {electronics.map((m, key) => (
              <Fade key={key} in={true} timeout={{ enter: 1300, exit: 1000 }}>
                <Grid
                  className={classes.gridItemWrapper}
                  item
                  key={key}
                  xs={6}
                  sm={6}
                  md={4}
                >
                  <ProductCard
                    handleProductLink={handleProductLink}
                    handleDialogContent={handleDialogContent}
                    handleClick={handleClick}
                    handleDrawer={handleDrawerToggle}
                    handleAddCart={handleCartItems}
                    price={m["price"]}
                    title={m["title"]}
                    image={m["image"]}
                    description={m["description"]}
                    category={m["category"]}
                  />
                </Grid>
              </Fade>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel className={classes.tabPanel} value={"5"}>
          <Grid container spacing={2}>
            {jewelery.map((m, key) => (
              <Fade key={key} in={true} timeout={{ enter: 1300, exit: 1000 }}>
                <Grid
                  className={classes.gridItemWrapper}
                  item
                  key={key}
                  xs={6}
                  sm={6}
                  md={4}
                >
                  <ProductCard
                    handleProductLink={handleProductLink}
                    handleDialogContent={handleDialogContent}
                    handleClick={handleClick}
                    handleDrawer={handleDrawerToggle}
                    handleAddCart={handleCartItems}
                    price={m["price"]}
                    title={m["title"]}
                    image={m["image"]}
                    description={m["description"]}
                    category={m["category"]}
                  />
                </Grid>
              </Fade>
            ))}
          </Grid>
        </TabPanel>
      </TabContext>
    </Toolbar>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxSizing: "border-box",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",

    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  tabList: {
    paddingTop: "16px",
    paddingBottom: "16px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  tab: {
    "&:hover": {
      opacity: "1",
      color: "#ced4da",
    },
  },

  tabPanel: {
    width: "100%",
    display: "column",
    justifyContent: "center",
    boxSizing: "border-box",

    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  gridItemWrapper: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default ProductTabs;

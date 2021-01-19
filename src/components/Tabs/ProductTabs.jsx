import { useRef } from "react";
import { TabPanel, TabList, TabContext } from "@material-ui/lab";
import { Tab, Slide, Grid, Toolbar, Container, Fade } from "@material-ui/core";
import ProductCard from "../Card/ProductCards";
import useStyles from "./styles";

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
}) {
  const classes = useStyles();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Toolbar className={classes.root}>
      <TabContext value={value}>
        <TabList
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
          <Grid container spacing={2}>
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
                    handleDrawer={handleDrawerToggle}
                    handleAddCart={handleCartItems}
                    price={m["price"]}
                    title={m["title"]}
                    image={m["image"]}
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
                    handleDrawer={handleDrawerToggle}
                    handleAddCart={handleCartItems}
                    price={m["price"]}
                    title={m["title"]}
                    image={m["image"]}
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
                    handleDrawer={handleDrawerToggle}
                    handleAddCart={handleCartItems}
                    price={m["price"]}
                    title={m["title"]}
                    image={m["image"]}
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
                    handleDrawer={handleDrawerToggle}
                    handleAddCart={handleCartItems}
                    price={m["price"]}
                    title={m["title"]}
                    image={m["image"]}
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
                    handleDrawer={handleDrawerToggle}
                    handleAddCart={handleCartItems}
                    price={m["price"]}
                    title={m["title"]}
                    image={m["image"]}
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

export default ProductTabs;

import { useRef } from "react";
import { TabPanel, TabList, TabContext } from "@material-ui/lab";
import { Tab, Slide, Grid, Toolbar } from "@material-ui/core";
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
  handleDrawerToggle
}) {
  const handleChange = (e, newValue) => {
    console.log(e.target);
    setValue(newValue);
  };

  return (
    <Toolbar
      style={{
        paddingBottom: "20px",
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <TabContext value={value}>
        <TabList
          value={value}
          onChange={handleChange}
          aria-label="Product Tabs"
        >
          <Tab value="1" label={"All"} />
          <Tab value="2" label={"Men clothing"} />
          <Tab value="3" label={"Women clothing"} />
          <Tab value="4" label={"Electronics"} />
          <Tab value="5" label={"Jewelery"} />
        </TabList>

        <TabPanel style={{ width: "100%", display: "column" }} value={"1"}>
          <Grid container spacing={3}>
            {allProduct.map((m, key) => (
              <Slide direction="up" in={true} timeout={{enter:1300, exit:1000}}>
                <Grid
                  style={{ display: "flex", justifyContent: "center" }}
                  item
                  key={key}
                  xs={12}
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
              </Slide>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={"2"}>
          <Grid container spacing={3}>
            {menProduct.map((m, key) => (
              <Grid
                key={key}
                style={{ display: "flex", justifyContent: "center" }}
                item
                xs={12}
                sm={6}
                md={4}
              >
                <ProductCard
                  handleAddCart={handleCartItems}
                  price={m["price"]}
                  title={m["title"]}
                  image={m["image"]}
                  category={m["category"]}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={"3"}>
          <Grid container spacing={3}>
            {womenProduct.map((m, key) => (
              <Grid
                style={{ display: "flex", justifyContent: "center" }}
                item
                key={key}
                xs={12}
                sm={6}
                md={4}
              >
                <ProductCard
                  handleAddCart={handleCartItems}
                  price={m["price"]}
                  title={m["title"]}
                  image={m["image"]}
                  category={m["category"]}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={"4"}>
          <Grid container spacing={3}>
            {electronics.map((m, key) => (
              <Grid
                style={{ display: "flex", justifyContent: "center" }}
                item
                key={key}
                xs={12}
                sm={6}
                md={4}
              >
                <ProductCard
                  handleAddCart={handleCartItems}
                  price={m["price"]}
                  title={m["title"]}
                  image={m["image"]}
                  category={m["category"]}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={"5"}>
          <Grid container spacing={3}>
            {jewelery.map((m, key) => (
              <Grid
                style={{ display: "flex", justifyContent: "center" }}
                item
                key={key}
                xs={12}
                sm={6}
                md={4}
              >
                <ProductCard
                  handleAddCart={handleCartItems}
                  price={m["price"]}
                  title={m["title"]}
                  image={m["image"]}
                  category={m["category"]}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </TabContext>
    </Toolbar>
  );
}

export default ProductTabs;

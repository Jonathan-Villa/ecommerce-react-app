import { useState } from "react";
import { Tabs, Tab, Toolbar } from "@material-ui/core";
import items from "./productLists";
import TabPanels from "./TabPanels"

function ProductTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <Toolbar style={{paddingBottom:"20px"}}>
      <Tabs value={value} onChange={handleChange} aria-label="Product Tabs">
        {items.map((m, key) => (
          <Tab value={key} key={key}  label={m["productLabel"]} />
        ))}
  


      </Tabs>
    </Toolbar>
  );
}

export default ProductTabs;

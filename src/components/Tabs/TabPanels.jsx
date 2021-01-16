import React from "react";

function TabPanels({ component: Component, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Component />}
    </div>
  );
}

export default TabPanels;

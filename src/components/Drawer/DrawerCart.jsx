import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import useStyles from "./styles";

function DrawerCart({ items, open, handleClose }) {
  const classes = useStyles();

 

  return (
    <>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        {items.map((m, key) => (
          <List key={key}>
            <ListItem>
              <ListItemText primary={m["title"]} />
            </ListItem>
            <ListItem>
              <ListItemText primary={m["price"]} />
            </ListItem>
            <ListItem>
              <ListItemText primary={m["quantity"]} />
            </ListItem>
          </List>
        ))}
      </Drawer>
    </>
  );
}

export default DrawerCart;

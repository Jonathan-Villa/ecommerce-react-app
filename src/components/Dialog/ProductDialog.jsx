import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  Grid,
  Typography,
  DialogContent,
  Container,
} from "@material-ui/core";

function ProductDialog({ open = false, handleClose, children }) {
  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose}>
      <DialogContent>
        <Container>
          <Grid item xs={12}>
            {/* <Typography variant="h5">{children.title}</Typography>
            <img
              style={{
                width: "150px",
                objectFit: "contain",
                boxSizing: "border-box",
                padding: "20px",
              }}
              src={children.image}
              alt={children.title}
            /> */}
          </Grid>
        </Container>
      </DialogContent>

      <DialogActions>
        <Button color="primary" variant="contained" onClick={handleClose}>
          ADD TO CART
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductDialog;

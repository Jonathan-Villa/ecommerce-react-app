import {createContext, useReducer} from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";




function PaymentPanel() {



  return (
    <div>
      <Accordion>
        <AccordionSummary>
          <Typography>3. Payment</Typography>


        </AccordionSummary>
      </Accordion>
    </div>
  );
}

export default PaymentPanel;

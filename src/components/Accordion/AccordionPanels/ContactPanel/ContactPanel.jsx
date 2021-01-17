import { useRef } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

function ContactPanel() {

    const {firstName, lastName, Email, PhoneNum } = useRef()

  return (
    <div>
      <Accordion>
        <AccordionSummary>
          <Typography>1. Contact Information</Typography>
          <AccordionDetails>
            <div>
              <div>
                <TextField
                    ref={firstName}
                  required
                  label="First Name"
                  type="text"
                  variant="outlined"
                  color="primary"
                />
                <TextField
                  required
                  label="Last Name"
                  type="text"
                  variant="outlined"
                  color="primary"
                />
              </div>

              <TextField
                required
                label="Email"
                type="text"
                variant="outlined"
                color="primary"
              />
              <TextField
                required
                label="Phone Number"
                variant="outlined"
                color="primary"
              />
            </div>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

export default ContactPanel;

import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography, TextField, Button, Grid } from "@material-ui/core"

function BillingPanel() {
    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    <Typography>2. Shipping{` & `} Billing Address</Typography>
                </AccordionSummary>
            </Accordion>
            
        </div>
    )
}

export default BillingPanel

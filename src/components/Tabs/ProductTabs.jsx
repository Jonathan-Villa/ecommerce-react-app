import {useState} from 'react'
import { Tabs, Tab,AppBar } from "@material-ui/core"

function ProductTabs() {
    const [value, setValue] = useState(0)

    const handleChange= (e, newValue)=> {
        setValue(newValue)
    }
    return (
        <AppBar>
            <Tabs value={value} onChange={handleChange} aria-label="Product Tabs">
                
                
            </Tabs>
        </AppBar>
    )
}

export default ProductTabs

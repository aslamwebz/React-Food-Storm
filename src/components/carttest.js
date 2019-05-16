import React, {useEffect, useState} from 'react'
import Drawer from '@material-ui/core/Drawer'

const Cart = (props) => {

const [right, setRight] = useState(false)
const [cart, setCart] = useState(false)

useEffect(() => {
    // props.getCart()
}, props.cart)

const toggleDrawer = () => {
    setRight(false)
}



const content = (
    <div>
        <button className="btn" onClick={() => setRight(true)}>
    open sidebar
    </button>
    <Drawer anchor="right" open={right} onClose={toggleDrawer}>
    asd
    </Drawer>
    </div>
)

return content



}

export default Cart
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { openCart, addToCart, removeFromCart, emptyCart} from '../actions/cartActions'
import Drawer from '@material-ui/core/Drawer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import QuantityCounter from './QuntityCounter'
import Swal from 'sweetalert2'

const Cart = (props) => {

const [cartItems, setCartItems] = useState([])
const [checkout, setcheckout] = useState(false)

useEffect(() => {
    cartCheck()
}, [props])

const toggleDrawer = () => {
    props.openCart(false)
}

const cartCheck = () => {

    if(props.cart.length === 0){
        setcheckout(false)
    } else {

    setcheckout(true)

    }

    const Items = props.cart.map(item => (
        <tr key={item.id}>
            <td>
                <img height="100px" src={`img/${item.path}`} className="d-inline " alt="" /></td>
            <td>{item.name}</td>
            {/* <td>{item.details}</td> */}
            <td>{item.type}</td>
            <td>$ {item.price}</td>
            <td>
               <QuantityCounter />
                {/* <button className="btn btn-danger" onClick={() => removeItem(item, props.cart)}>Remove Item</button> */}
            </td>
            <td>
            <button className="btn btn-danger btn-sm" onClick={() => props.removeFromCart(item, props.cart)}>Remove</button>
            </td>
        </tr>

    ))

    setCartItems(Items)
}

const fireCheckout = () => {
    props.openCart(false)
    Swal.fire({
        title: 'CHECKOUT',
        text: "Do you want to Order and Checkout the items you've selected?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Checkout'
      }).then((result) => {
        props.emptyCart(props.cart)
        if (result.value) {
          Swal.fire(
            'Order Success',
            'Your order has been successfully completed, please wait for the delevery',
            'success'
          )
        }
      })
}


const content = (
    <div >
        <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={700}
            transitionLeaveTimeout={300}>
            <Drawer anchor="right" open={props.open} onClose={toggleDrawer}>
                <div className="container"  id="drawer">
                    <div id="cart">
                        <button className="btn btn-info m-1" onClick={() => props.openCart(false)}>Back to list</button>
                        <table className="table table-condensed table-striped table-bordered">
                            <thead className="thead-dark">
                                <tr >
                                    <th scope="col">Image</th>
                                    <th scope="col">Item Name</th>
                                    {/* <th scope="col">Description</th> */}
                                    <th scope="col">Type</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                           
                            {cartItems} 
                            </tbody>
                        </table>
                        {checkout ? '':'Your cart is empty, please add some items'}

                        {checkout ? <button className="btn btn-success" onClick={() => fireCheckout()}>Checkout and Order</button>:''}
                    </div>   
                </div>
            </Drawer>
        </ReactCSSTransitionGroup>
    </div>
)


return content

}

const mapStateToProps = state => ({
    open:state.cart.open,
    cart:state.cart.cart
})

export default connect(mapStateToProps, {openCart, addToCart, removeFromCart, emptyCart})(Cart)
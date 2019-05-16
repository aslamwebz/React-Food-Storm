import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openCart } from '../actions/cartActions'
import Cart from './Cart'

const Navbar = (props) => {

    const clickHandle = () => {
        props.openCart(true)
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div class="container">
          <a className="navbar-brand" href="/">Food Storm</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li> */}
                <li className="nav-item">
                    <button className="nav-link active btn btn-danger" onClick={clickHandle}> <i class="fas fa-shopping-cart"></i>&nbsp;View Cart</button>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li> */}
                </ul>
            </div>
          </div>
            <Cart />
        </nav>
    )
}


const mapStateToProps = state => ({
    open:state.items.open,
})

export default connect(mapStateToProps, {openCart})(Navbar)
import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getItems, filterItems } from '../actions/menuActions'
import Card from '../components/Card'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { addToCart} from '../actions/cartActions'

const Dashboard = props => {
 
    useEffect(() => {
        props.getItems()
    }, [props.items.items])

    const check = (e) => {
        console.log(e)
        props.filterItems(e)
    }

    const content = props.items.map(item => (
            <Card item={item} key={item.id} add={() => props.addToCart(item, props.cart)} />
        )
    )

    return(
     <div id="filter_pane">
        <div className="container-fluid">
        <h2 className="text-center">FOOD STORM MENU</h2>
            <div id="button-bar">
                <button className="btn" onClick={() => check("appetizers")} >
                <i className="fas fa-apple-alt"></i>
                    Appetizer
                </button>
                <button className="btn" onClick={() => check("breakfast")} >
                <i className="fas fa-stroopwafel"></i>
                    Breakfast
                </button>
                <button className="btn" onClick={() => check("lunch")} >
                <i className="fas fa-fish"></i>
                    Lunch
                </button>
                <button className="btn" onClick={() => check("dinner")} >
                <i className="fas fa-hamburger"></i>
                    Dinner
                </button>
            </div>
            <div className="container-fluid card_pane">
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    
                        {content}
                        
                </ReactCSSTransitionGroup>
            </div>
         </div>
     </div>

    )
}


const mapStateToProps = state => ({
    items:state.items.items,
    cart:state.cart.cart
})

export default connect(mapStateToProps, {getItems, filterItems, addToCart})(Dashboard)
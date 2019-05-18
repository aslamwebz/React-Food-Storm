import {ADD_TO_CART, REMOVE_FROM_CART , OPEN_CART, EMPTY_CART  } from './types'

export const addToCart = (item,cart) => dispatch => {
    if(cart.includes(item)){
        console.log('already have')
    } else {
        cart.push(item)
    }
    dispatch({
        type:ADD_TO_CART,
        payload:cart
    })
}

export const removeFromCart = (item,cart) => dispatch => {
    const filteredCart = cart.filter(i => {
        return item !== i
    })
    dispatch({
        type:REMOVE_FROM_CART,
        payload:filteredCart
    })
}

export const openCart = (open) => dispatch => {
    // console.log('open action', open)
    dispatch({
        type:OPEN_CART,
        payload:open
    })
}

export const emptyCart = (cart) => dispatch => {
    cart = []
    dispatch({
        type:EMPTY_CART,
        payload:cart
    })
}

// const cart = localStorage.getItem('cart')

// localStorage.setItem('cart', JSON.stringify(cart))

// addCart(){
//     let alreadyInCart = false;
//     let cart = JSON.parse(localStorage.getItem('cart'))
//     let product = this.props.products;

//     cart.map(item => {
//       if(item.id === product.id){
//         alreadyInCart = true;
//         item.quantity += product.quantity
//       }

//       return item
//     })

//     if(alreadyInCart === false ){
//       cart.push(this.props.products)
//     }
    
//     localStorage.setItem('cart', JSON.stringify(cart))
//   }
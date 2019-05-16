import { ADD_TO_CART, REMOVE_FROM_CART,OPEN_CART,EMPTY_CART } from '../actions/types'

const initialState = {
    cart:[],
    open:false

}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            // console.log('add reducer')
            return{
                ...state,
                cart:action.payload
            }
        case REMOVE_FROM_CART:
            // console.log('remove reducer', action.payload)
            return{
                ...state,
                cart:action.payload
            }
        case OPEN_CART:
            // console.log('open reducer', action.payload)
            return {
                ...state,
                open:action.payload
            }
        case EMPTY_CART:
            return {
                ...state,
                cart:action.payload
            }
        default:
            return state
    }
}
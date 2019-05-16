import { GET_ITEMS,FILTER_ITEMS} from '../actions/types'

const initialState = {
    items:[],
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
        // console.log('reducer')
            return {
                ...state,
                items:action.payload
            }
        case FILTER_ITEMS:
            // console.log('filter reducer')
            return {
                ...state,
                items:action.payload
            }

        default:
            return state
    }
}
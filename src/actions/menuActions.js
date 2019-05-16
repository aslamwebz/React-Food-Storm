import { GET_ITEMS , FILTER_ITEMS } from './types'
import { Items } from '../Data/Items'

export const getItems = () => dispatch => {
    // console.log('fetching')
    dispatch({
        type:GET_ITEMS,
        payload:Items
    })
}

export const filterItems = (event) => dispatch => {
    // console.log('filter action')
    const items = Items.filter(item => {
        return item.type === event
    })
    dispatch({
        type:FILTER_ITEMS,
        payload:items
    })
}


import * as types from '../constants/actionTypes'
import history from '../history'
import {getPricesApi} from '../api/api'

export const getDayPrice = () => async(dispatch) => {
    const dayPrices = await getPricesApi()
    
    dispatch({type:types.GET_DAY_PRICE,payload:dayPrices})
}

export const addToInventory = formValues => async(dispatch) => {
    dispatch({type:types.ADD_TO_INVENTORY,payload:formValues})

    history.push(process.env.PUBLIC_URL + "/")
}
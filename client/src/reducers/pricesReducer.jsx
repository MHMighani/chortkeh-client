import * as types from '../constants/actionTypes'
import _ from 'lodash'

export default (state={"stock":{"Buy":1}},action) => {
    switch(action.type){
        case types.GET_DAY_PRICE:
            const currencyPrices = _.keyBy(action.payload["Currency"],"Currency")
            const goldPrices = _.keyBy(action.payload["Gold"],"Coin")
            const allPrices = {...state,...currencyPrices,...goldPrices}
            
            return allPrices
        default:
            return state    
    }
}
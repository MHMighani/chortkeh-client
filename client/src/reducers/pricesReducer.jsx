import * as types from '../constants/actionTypes'
import _ from 'lodash'

export default (state={"stock":{"Buy":1}},action) => {
    switch(action.type){
        case types.GET_DAY_PRICE:
            const currencyPrices = _.keyBy(action.payload["Currency"],"Currency")
            const goldPrices = _.keyBy(action.payload["Gold"],"Coin")
            let cryptoPrices = _.keyBy(action.payload["Crypto"],"Currency")

            // converting bitcoin price from Dollar to Toman
            cryptoPrices["BitCoin"]["Buy"] = cryptoPrices["BitCoin"]["Buy"] * currencyPrices["US Dollar"]["Buy"]

            const allPrices = {...state,...currencyPrices,...goldPrices,...cryptoPrices}
            
            return allPrices
        default:
            return state    
    }
}
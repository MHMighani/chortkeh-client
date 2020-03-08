import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {inventoryLabels,labelTranslations} from './inventoryLabels'
import allTodayPrices from './pricesReducer'
import inventoryReducer from './inventoryReducer'

export default combineReducers({
    form: formReducer,
    inventoryLabels,
    labelTranslations,
    allTodayPrices,
    inventoryList:inventoryReducer
})
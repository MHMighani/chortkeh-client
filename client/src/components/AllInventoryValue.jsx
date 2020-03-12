import React from 'react'
import {useSelector} from 'react-redux'
import numberWithCommas from '../NumberWithCommas';

const AllInventoryValue = () => {
    const todayPrices = useSelector(state => state.allTodayPrices)
    const inventoryList = useSelector(state => state.inventoryList)

    let allValue = inventoryList.reduce((total,inventory) => {
        return total + (todayPrices[inventory.subSource]["Buy"] * inventory.amount)
    },0)
    
    return <span>{numberWithCommas(allValue)}</span>
}

export default AllInventoryValue


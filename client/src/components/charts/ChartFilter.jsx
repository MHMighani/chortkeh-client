import React from 'react';

const ChartFilter  = ({chartFormatToggle}) => {
    return (
        <form>
            <select name="chart-filter" onChange={e => chartFormatToggle(e.target.value)}>
                <option value="subSource">منبع</option>
                <option value="mainSource">نوع منبع</option>
            </select>
            <label htmlFor="chart-filter">  نمودار براساس</label>
        </form>
    )
}

export default ChartFilter
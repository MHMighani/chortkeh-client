import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import AllInventoryValue from '../AllInventoryValue'

const Table = () => {
    return(
        <table>
            <TableHead />
            <TableBody />
            <tbody>
                <tr>
                    <td id="all-value" colSpan="2">{AllInventoryValue()}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
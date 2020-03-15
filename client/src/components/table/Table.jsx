import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import AllInventoryValue from '../AllInventoryValue'

const Table = () => {
    return(
        <table className="table table-striped table-borderless">
            <TableHead />
            <TableBody />
            <tbody>
                <tr>
                    <td id="all-value" colSpan="2" >ارزش کل دارایی : {AllInventoryValue()}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
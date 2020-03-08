import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import AllInventoryValue from '../AllInventoryValue'

const Table = () => {
    return(
        <table className="table table-striped border">
            <TableHead />
            <TableBody />
            <tbody>
                <tr>
                    <td>ارزش کل دارایی : {AllInventoryValue()}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
import TableRow from './TableRow'
import {stockData} from '../data'

export default function Table () {
    var stockSet = stockData.map((stock, index) => {
        console.log (stock)
        return <TableRow key={index} symbol={stock.symbol} name={stock.name} price={stock.lastPrice} change={`${Math.round(((stock.open - stock.lastPrice)/stock.lastPrice * 100)*10)/100}`} />
    })

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
            </tr>
            {stockSet}
        </table>
    )
}
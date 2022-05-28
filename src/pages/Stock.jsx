import React from 'react'
import '../App.css'
import {useParams} from 'react-router-dom'
import TableRow from '../components/TableRow'
import {stockData} from '../data'
import StockHeading from '../components/StockHeading'

// parse the stock symbol passed by the URL param.
// use that symbol to find the object with that symbol as a property.

// somehow pass the clicked TableRow name to Stock.jsx as TableRow.index.
// Not sure that works becuase it's passing "up" in React?

export default function Stock () {
 const {symbol} = useParams()
 let obj = stockData.find(o => o.symbol === `${symbol}`)
 console.log (obj)
    return (
        <div className ="stock-container">
            <StockHeading key={obj.symbol} name={obj.name}/>
             <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
            </tr>
            <TableRow key={obj.symbol} symbol={symbol} name={obj.name} price={obj.lastPrice} change={`${Math.round(((obj.open - obj.lastPrice)/obj.lastPrice * 100)*10)/100}`} />

        </table>
        </div>
    )
}
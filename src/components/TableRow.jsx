
export default function TableRow ({name, price, change,symbol}) {
    
    return (
        <tr>
            <td> <a href={`/stocks/${symbol}`}>{name}</a></td>
            <td>{price}</td>
            <td>{change}</td>
        </tr>
    )
    }

export default function TableRow ({name, price, change}) {
    
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{change}</td>
        </tr>
    )
}
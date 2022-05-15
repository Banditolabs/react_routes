import {Link} from 'react-router-dom'
import '../index.css'

export default function Nav (){
    return (
        <div className='nav'> 
            <Link to={'/'}>
                <div>Stocks</div>
            </Link>
            <Link to={'/currencies'}>
                <div>About</div>
            </Link>
        </div>
    )
}

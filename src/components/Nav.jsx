import {Link} from 'react-router-dom'
import '../index.css'
// import static data
import data from '../data'

export default function Nav (){
    return (
        <div className='nav'> 
            <Link to={'/stocks'}>
                <div>Home</div>
            </Link>
            <Link to={'/about'}>
                <div>About</div>
            </Link>
        </div>
    )
}

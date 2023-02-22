import {Link} from 'react-router-dom'

const Nav = () =>{
    return(
        <nav> 
            <ul>
                <li> <Link to="/home"> Home</Link></li>
                <li > <a href="https://www.npmjs.com/package/react-router-dom" rel="noreferrer" target="_blank">About</a> </li>
                <li> <Link to="/contact"> Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
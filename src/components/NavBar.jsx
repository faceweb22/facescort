
import { Link } from 'react-router-dom'
import '../CSS/navBar.css'
import logo from '../multimedia/logo.png'

function NavBar(){
    return (
        <>

            <nav className="navbar">

                <Link to="/"> 
                    <div className='logo'>
                        <img src={logo} width="200px" alt='logo'></img>
                    </div>
                </Link>
                <ul className="menu">

                    <li>
                        <Link to='/contacto'>Publica tu perfil</Link>
                    </li>
                    <li className='zona'>
                        <Link to='/buenos-aires'>Zona</Link>
                        <ul >
                            <li><Link to='/buenos-aires/microcentro'>microcentro</Link> </li>
                            <li><Link to='/buenos-aires/tribunales'>tribunales</Link></li>
                        </ul>
                    </li>
                        
                </ul>
            </nav>
            
         </>

    )
}

export default NavBar
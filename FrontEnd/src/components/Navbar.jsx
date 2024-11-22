import {Link} from 'react-router-dom'
import logo from '../assets/LogoNegro.png'

const Navbar = () => {
    return (
        <nav className='d-flex justify-content-between border-bottom pb-3 shadow-sm fixed-top bg-white z-3'>
            <Link className='navbar-brand'>
                <img className='' src={logo}  alt="" />
            </Link>
            <div>
                <button className='btn btn-outline-warning px-4 mx-2'>Crear Cuenta</button>
                <button className='btn btn-outline-warning px-4 mx-2'>Iniciar Sesión</button>
            </div>
        </nav>
    )
}

export default Navbar
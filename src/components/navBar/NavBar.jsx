import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './navBar.css'

const NavBar = () => {
    return (
        <div className='navBar-container'>
            <Navbar collapseOnSelect expand='lg' className='navBar'>
                <div className='logo-container'>
                    <NavLink to="/" className='img-container'>
                        <img src='/assets/logo.png' alt='logo' className='img'/>
                    </NavLink>
                    <NavLink to="/" className='name-container'>
                        <h2 className='name'>LUCK.ROCH</h2>
                    </NavLink>
                </div>
                <Navbar.Toggle aria-controls='reponsive-navbar-nav'/>
                <Navbar.Collapse>
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link" activeclassname="active">
                        Inicio
                    </NavLink>
                    <NavLink to="/products" className="nav-link" activeclassname="active">
                        Productos
                    </NavLink>
                    <NavLink to="/service" className="nav-link" activeclassname="active">
                        Servicio
                    </NavLink>
                    <NavLink to="/contact" className="nav-link" activeclassname="active">
                        Contacto
                    </NavLink>
                </Nav>
                    <NavLink to="/cart" className='carrito-container'>
                        <i className="fa-solid fa-cart-shopping" id='cart'></i>
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
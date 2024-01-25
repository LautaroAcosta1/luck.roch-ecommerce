import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import TotalItems from '../cartContent/TotalItems'
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import './navBar.css'

const NavBar = () => {
    const { cart } = useContext(dataContext)

    return (
        <div className='navBar-container'>
            <Navbar collapseOnSelect expand='lg' className='navBar'>
                <div className='logo-container'>
                    <NavLink to="/" className='img-container'>
                        <img src='/assets/logo.png' alt='logo' className='img'/>
                    </NavLink>
                    <NavLink to="/" className='name-container'>
                        <h2 className='name'>LUCK ROCH</h2>
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
                    <NavLink to="/cart" className='cart-container'>
                        <i className="fa-solid fa-cart-shopping" id='cart-navBar'></i>
                        <div className='number-container'>
                            {cart.length > 0 ? <TotalItems/> : null}
                        </div>
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div className='container'>
        <Navbar collapseOnSelect expand='lg'>
        <Navbar.Toggle aria-controls='reponsive-navbar-nav'/>
            <Navbar.Collapse>
                <Nav>
                    <i className="fa-solid fa-clover"></i>
                    <h1>LUCK.ROCH</h1>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Servicio</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                    <i className="fa-solid fa-cart-shopping"></i>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default NavBar
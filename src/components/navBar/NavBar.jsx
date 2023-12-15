import { Nav, Navbar } from 'react-bootstrap'
import './navBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' className='navBar'>
                <div className='logo-container'>
                    <Nav.Link href='#inicio' className='img-container'>
                        <img src='logo.png' alt='logo' className='img'/>
                    </Nav.Link>
                    <Nav.Link href='#inicio' className='name-container'>
                        <h2 className='name'>LUCK.ROCH</h2>
                    </Nav.Link>
                </div>
                <Navbar.Toggle aria-controls='reponsive-navbar-nav'/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#servicio">Servicio</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <Nav.Link href='#carrito' className='carrito-container'>
                        <i className="fa-solid fa-cart-shopping" id='carrito'></i>
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar
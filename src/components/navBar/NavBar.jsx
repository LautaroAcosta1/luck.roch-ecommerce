import { Nav, Navbar } from 'react-bootstrap'
import './navBar.css'

const NavBar = () => {
    return (
        <div className='navBar-container'>
            <Navbar collapseOnSelect expand='lg' className='navBar'>
                <div className='logo-container'>
                    <Nav.Link href={"/"} className='img-container'>
                        <img src='/assets/logo.png' alt='logo' className='img'/>
                    </Nav.Link>
                    <Nav.Link href={"/"} className='name-container'>
                        <h2 className='name'>LUCK.ROCH</h2>
                    </Nav.Link>
                </div>
                <Navbar.Toggle aria-controls='reponsive-navbar-nav'/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href={"/"}>Inicio</Nav.Link>
                        <Nav.Link href={"/products"}>Productos</Nav.Link>
                        <Nav.Link href={"/service"}>Servicio</Nav.Link>
                        <Nav.Link href={"/contact"}>Contacto</Nav.Link>
                    </Nav>
                    <Nav.Link href={"/cart"} className='carrito-container'>
                        <i className="fa-solid fa-cart-shopping" id='cart'></i>
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
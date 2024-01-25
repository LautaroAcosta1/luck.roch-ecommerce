import './footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <img className='footer-logo' src="/assets/logo.png" alt="Logo"/>
            <div className='footer-socialIcons-container'>
                <a href="https://wa.me/5491168792439" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/luck.roch.ind/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <ul className='footer-menu-container'>
                <li className='menu-item'>Términos y condiciones</li>
                <li className='menu-item'>Cookies</li>
                <li className='menu-item'>Privacidad</li>
                <li className='menu-item'>Formas de envio</li>
            </ul>
            <span className='copyright'>© Luck Roch. Todos los derechos reservados.</span>
        </footer>
    )
}

export default Footer
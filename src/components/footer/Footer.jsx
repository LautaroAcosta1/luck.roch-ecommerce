import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <img className='footer-logo' src="logo.png" alt="Logo"/>
            <div className='footer-socialIcons-container'>
                <Link to={'/'} className='footer-socialIcons'>das</Link>
                <Link to={'/'} className='footer-socialIcons'>asd</Link>
                <Link to={'/'} className='footer-socialIcons'>dsa</Link>
                <Link to={'/'} className='footer-socialIcons'>sda</Link>
            </div>
        </footer>
    )
}

export default Footer
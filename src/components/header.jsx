import logo from '../assets/img/logo.svg';
import '../styles/header.scss'

function Header () {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo" />
            </div>
        </header>
    )
}

export default Header
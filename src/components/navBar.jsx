import '../styles/navBar.scss'; 
import PropTypes from 'prop-types';

function NavBar({ isOpen }) {
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <nav>
                    <a href="#">Accueil</a>
                    <a href="#">Utilisateurs</a>
                    <a href="#">Clients</a>
                    <a href="#">Paramètres</a>
                </nav>
            </div>
        </div>
    );
}

NavBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}

export default NavBar;

import '../styles/navBar.scss';

function NavBar({ isOpen, onClose }) {
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

export default NavBar;

import '../styles/input.scss'
import addButton from '../assets/img/icon-plus-white.svg';

function Input () {
    return (
        <div className="input-container">
            <input
            className="input-style"
            placeholder="prenom.nom@societe.fr"
            />
            <button className="button-style"><img src={addButton} alt="Logo" /></button>
        </div>
        
    )
    
}

export default Input
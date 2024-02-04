import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/addUserModal.scss';

const AddUserModal = ({ isOpen, onCancel }) => {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  if (!isOpen) {
    return null;
  }
  return (
    <div className={`add-modal-container ${isOpen ? 'open' : ''}`}>
      <div className="add-user-modal">
        <p>Ajouter un utilisateur</p>
        <div className="input-container">
          <label>Nom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Prénom Nom"
          />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="prenom.nom@societe.fr"
          />
        </div>
        <div className="button-container">
          <button onClick={onCancel}>Ajouter</button>
          <button onClick={onCancel}>Annuler</button>
        </div>
      </div>
    </div>
  );
};

AddUserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onAddUser: PropTypes.func.isRequired,
};

export default AddUserModal;

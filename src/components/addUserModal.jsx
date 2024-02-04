import React, { useState } from 'react';
import '../styles/addUserModal.scss';
import PropTypes from 'prop-types';

const AddUserModal = ({ isOpen, onCancel, onAddUser }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleCancel = () => {
    onCancel();
    setUserName('');
    setUserEmail('');
  };

  const handleAddUser = () => {
    onAddUser({ name: userName, email: userEmail });
    setUserName('');
    setUserEmail('');
  };

  return (
    <div className={`modal-container ${isOpen ? 'open' : ''}`}>
      <div className="add-user-modal">
        <p>Ajouter un nouvel utilisateur</p>
        <div className="input-container">
          <label>Nom:</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Prénom Nom'/>
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder='prenom.nom@societe.fr'/>
        </div>
        <div className="button-container">
          <button onClick={handleAddUser}>Ajouter</button>
          <button onClick={handleCancel}>Annuler</button>
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

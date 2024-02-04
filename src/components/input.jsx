import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/input.scss';
import addButton from '../assets/img/icon-plus-white.svg';
import AddUserModal from './addUserModal';

function Input({ onAddUser }) {
  const [inputValue, setInputValue] = useState('');
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  const handleButtonClick = () => {
    setShowAddUserModal(true);
  };

  const handleCloseModal = () => {
    setShowAddUserModal(false);
  };

  const handleAddUser = (userData) => {
    console.log('Ajouter un utilisateur avec les données :', userData);
    onAddUser(userData);
    setShowAddUserModal(false);
  };

  return (
    <>
      <div className="input-container">
        <input
          className="input-style"
          placeholder="prenom.nom@societe.fr"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button-style" onClick={handleButtonClick}>
          <img src={addButton} alt="Logo" />
        </button>
      </div>
      {showAddUserModal && (
        <AddUserModal
          isOpen={showAddUserModal}
          onCancel={handleCloseModal}
          onAddUser={handleAddUser}
        />
      )}
    </>
  );
}

Input.propTypes = {
  onAddUser: PropTypes.func.isRequired,
};

export default Input;

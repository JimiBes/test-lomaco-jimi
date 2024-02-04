import PropTypes from 'prop-types';
import '../styles/deleteConfirmationModal.scss';

const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm, userName }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="delete-modal-container">
      <div className="delete-confirmation-modal">
        <p>{`Veuillez confirmer la suppression de l'utilisateur ${userName}`}</p>
        <div className="delete-buttons">
          <button onClick={onConfirm}>Valider la suppression</button>
          <button onClick={onCancel}>Annuler</button>
        </div>
      </div>
    </div>
  );
};

DeleteConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

export default DeleteConfirmationModal;
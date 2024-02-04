import { useState } from 'react';
import '../styles/userList.scss';
import PropTypes from 'prop-types';
import deleteButton from '../assets/img/icon-trash-white.svg';
import DeleteConfirmationModal from './deleteConfirmationModal';

const UserList = ({ users, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleDeleteClick = (userId) => {
    setSelectedUserId(userId);
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedUserId(null);
  };

  const handleConfirmDelete = async () => {
    try {
      await onDelete(selectedUserId);
    } catch (error) {
      console.error('Error deleting user:', error);
    }

    setShowDeleteModal(false);
    setSelectedUserId(null);
  };

  return (
    <>
      <ul className="user-list-container">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-info">
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
            <button onClick={() => handleDeleteClick(user.id)} className="delete-button">
              <img src={deleteButton} alt="Delete Icon" />
            </button>
          </li>
        ))}
      </ul>

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        userName={selectedUserId ? users.find(user => user.id === selectedUserId)?.name : ''}
      />
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserList;
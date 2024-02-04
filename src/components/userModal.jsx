import { useState, useEffect } from 'react';
import '../styles/userModal.scss';
import Input from './input';
import UserList from './userList';
import AddUserModal from './addUserModal';

function UserModal() {
  const [users, setUsers] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = (userId) => {
    console.log(`Supprimer l'utilisateur avec l'ID : ${userId}`);
  };

  return (
    <div className="user-modal-container">
      <div className="user-modal-header">
        <h2>Utilisateurs</h2>
        <Input setShowAddUserModal={setShowAddUserModal} />
      </div>
      <div className="user-modal-content">
        <UserList
          users={users}
          onDelete={handleDeleteUser}
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          showAddUserModal={showAddUserModal}
          setShowAddUserModal={setShowAddUserModal}
        />
        {showAddUserModal && <AddUserModal showAddUserModal={showAddUserModal} setShowAddUserModal={setShowAddUserModal} />}
      </div>
    </div>
  );
}

export default UserModal;

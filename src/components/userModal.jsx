import '../styles/userModal.scss'
import { useState, useEffect } from 'react';
import Input from './input'
import UserList from './userList'

function UserModal () {

    const [users, setUsers] = useState([]);

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
            <Input />
        </div>
        <div className="user-modal-content">
            <UserList users={users} onDelete={handleDeleteUser} />
        </div>
       </div>
    )
}

export default UserModal
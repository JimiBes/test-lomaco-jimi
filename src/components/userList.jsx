import '../styles/userList.scss'
import PropTypes from 'prop-types';
import deleteButton from '../assets/img/icon-trash-white.svg';

const UserList = ({ users, onDelete }) => {
  return (
    <ul className="user-list-container">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <div className="user-info">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
          <button onClick={() => onDelete(user.id)} className="delete-button">
            <img src={deleteButton} alt="Logo" />
          </button>
        </li>
      ))}
    </ul>
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

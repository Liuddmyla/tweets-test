import User from "components/user/User";
import PropTypes from 'prop-types';
import css from "./UsersList.module.css";

const UserList = ({ users }) => { 
  
  return (
    <>
      <div className={css.container}>         
        <ul className={css.list}>
          {users.map((user) => (
            <li key={user.id} className={css.item}>
              <User user={user} />                  
            </li>
          ))}
        </ul>        
      </div>
    </>
  );
};


export default UserList;

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            tweets: PropTypes.string.isRequired,
            followers: PropTypes.number.isRequired,
       }) 
    )    
}
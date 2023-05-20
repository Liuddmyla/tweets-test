import User from "components/user/User";
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
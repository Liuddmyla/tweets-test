
import css from "./UsersList.module.css";



const UserList = ({ users }) => {  
  
  return (
        <>
      <div className={css.container}>         
        <ul className={css.list}>
          {users.map(({avatar, id, tweets, followers}) => (
              <li key={id} className={css.item}>
                  <img src={`${avatar}`} alt='avatar' width={62} height={62} className={css.img}/>
                  <p className={css.tweets}>{tweets} tweets</p>
                  <p className={css.followers}>{followers.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} followes</p>
                  <button type="button" className={css.btn}>
                      follow
                  </button>
            </li>
          ))}
        </ul>        
      </div>
    </>
    );
};


export default UserList;
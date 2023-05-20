import { useEffect, useState } from "react";
import css from "../usersList/UsersList.module.css";


const User = ({user}) => {
   const [isFollowing, setIsFollowing] = useState(JSON.parse(localStorage.getItem(`${user.id}-isFollowing`)) ?? false);
 

  useEffect(() => {
    localStorage.setItem(`${user.id}-isFollowing`, JSON.stringify(isFollowing));
  }, [user.id, isFollowing])
 
  
  const onFollowClick = () => {  
    setIsFollowing(true);    
   
  }

  const onFollowingClick = () => {
    setIsFollowing(false);   
 } 
    
    return (
        <>
            <img src={`${user.avatar}`} alt='avatar' width={62} height={62} className={css.img}/>
            <p className={css.tweets}>{user.tweets} tweets</p>
            <p className={css.followers}>{user.followers.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} followers</p>
            { isFollowing? <button type="button" id={user.id} className={css.btnFol} onClick={onFollowingClick}>following</button> :
               <button type="button" id={user.id} className={css.btn} onClick={onFollowClick}>follow</button>}
        </>
    )
}

export default User;
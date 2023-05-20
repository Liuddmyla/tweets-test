import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import css from "./User.module.css";


const User = ({user}) => {
  const [following, setFollowing] = useState(JSON.parse(localStorage.getItem(`${user.id}-following`)) ?? false);
 
  const [followersNumber, setFollowersNumber] = useState(user.followers); 

  useEffect(() => {
    localStorage.setItem(`${user.id}-following`, JSON.stringify(following));
   
    fetch(`https://645242e1a2860c9ed4068029.mockapi.io/users/${user.id}`, {
      method: 'PUT',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({followers: followersNumber})
     }).then(res => {
       if (res.ok) {
      return res.json();
      }  
     }).catch(error => {
       console.log(error);
     })
    
  }, [user.id, following, followersNumber ])
 
  
  const onFollowClick = () => {  
    setFollowing(true);    
    setFollowersNumber((prev)=>prev + 1)
   
  }

  const onFollowingClick = () => {
    setFollowing(false);   
    setFollowersNumber((prev)=>prev - 1)
 } 
    
    return (
        <>
            <img src={`${user.avatar}`} alt='avatar' width={62} height={62} className={css.img}/>
            <p className={css.tweets}>{user.tweets} tweets</p>
            <p className={css.followers}>{followersNumber.toLocaleString().replace(/\s/g, ',')} followers</p>
            { following? <button type="button" id={user.id} className={css.btnActiv} onClick={onFollowingClick}>following</button> :
              <button type="button" id={user.id} className={css.btn} onClick={onFollowClick}>follow</button>}
        </>
    )
}

export default User;

User.propTypes = {
    user: PropTypes.shape({
            id: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            tweets: PropTypes.string.isRequired,
            followers: PropTypes.number.isRequired,
       }) 
       
}
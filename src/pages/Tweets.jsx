
import { Loader } from "components/Loader";
import UserList from "components/usersList/UsersList";
import { useEffect, useState } from "react";
import css from "../components/usersList/UsersList.module.css";
import {  useNavigate } from "react-router-dom";

const Status = {
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected'
};

const Tweets = () => { 

  const [status, setStatus] = useState(null);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); 
  const [page, setPage] = useState(1); 
  
useEffect(() => {
  const URL = `https://645242e1a2860c9ed4068029.mockapi.io/users?page=${page}&limit=3`;

  setStatus(Status.PENDING);
  
  fetch(URL, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }  
}).then(tasks => {
  setUsers((prev)=>[...prev, ...tasks]);
  setStatus(Status.RESOLVED); 
}).catch(error => {
  setError(error);
  setStatus(Status.REJECTED);
})
  
}, [page, setPage])  
  
 
  const handleClick = () => {
    setPage((prev) => prev + 1);
  }

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  }

  return (
    <>
      <button type="button" className={css.button} onClick={handleBackClick}> Back </button>
      {status === Status.PENDING  && <Loader />}
      {status === Status.REJECTED && (<div>{error.message}</div>)}  
      {users && <UserList users={users} />}
      {users.length < 12 && <button type="button" className={css.button} onClick={handleClick}> Load More </button>}
    </>
  
  );
};

export default Tweets;
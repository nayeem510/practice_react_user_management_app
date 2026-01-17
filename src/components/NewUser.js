import React, {useState} from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useUsersContext } from '../hooks/useUsersContext';

const NewUser = () => {

  const {dispatch} = useUsersContext()

  const [username, setUsername] = useState("");

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuidv4(), 
      userName: username
    };
    dispatch({type: "ADD_USER", payload: newUser.userName})
    setUsername("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' value={username} onChange={handleUserNameChange} placeholder="Enter user name" required />
        <button className='addButton'>Add User</button>
      </form>
    </>
  )
}

export default NewUser;

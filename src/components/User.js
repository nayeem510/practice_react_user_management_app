import React from 'react';

import { useUsersContext } from '../hooks/useUsersContext';

const User = ({user}) => {

    const {id, userName} = user;

    const {users, setUsers} = useUsersContext();

    const handleDelete = (id) => {
        const filteredUsers = users.filter(user => user.id !== id );
        setUsers(filteredUsers);
    }

  return (
    <article className='user'>
        <p>{id}</p>
        <h2>{userName}</h2>
        <button className='deleteButton' onClick={() => handleDelete(id)}>Delete</button>
    </article>
  )
}

export default User;

import React from 'react';

import { useUsersContext } from '../hooks/useUsersContext';

const User = ({user}) => {

    const {id, userName} = user;

    const {dispatch} = useUsersContext();

    const handleDelete = (id) => {
        dispatch({type: "DELETE_USER", payload: id})
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

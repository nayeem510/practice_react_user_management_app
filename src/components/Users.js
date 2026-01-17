import React from 'react';

import User from './User';
import { v4 as uuidv4 } from 'uuid';
import { useUsersContext } from '../hooks/useUsersContext';

const Users = () => {

  const {users} = useUsersContext();

  return (
    <section className='users'>
        {users.map((user) => (
            <User key={uuidv4()} user={user} />
        ))}
    </section>
  )
}

export default Users;

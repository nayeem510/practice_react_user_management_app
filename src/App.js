import React, {useState} from 'react';

import { v4 as uuidv4 } from 'uuid';
import Users from './components/Users';
import NewUser from './components/NewUser';
import { UsersContext } from './context/UsersContext';

const usersData = [
    {id: uuidv4(), userName: "Nayeem Ahmed"},
    {id: uuidv4(), userName: "Md. Emon"}
]

const App = () => {

    const [users, setUsers] = useState(usersData);

  return (
    <UsersContext.Provider value={{users, setUsers}}>
      <>
        <h1>User Management App</h1>

        <NewUser />
        <Users />
      </>
    </UsersContext.Provider>
  )
}

export default App;

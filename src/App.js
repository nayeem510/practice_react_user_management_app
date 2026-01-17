import React, {useReducer} from 'react';

import Users from './components/Users';
import NewUser from './components/NewUser';
import { UsersContext } from './context/UsersContext';
import { initialState, reducer } from './reducer/usersReducer';

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{state, dispatch}}>
      <>
        <h1>User Management App</h1>

        <NewUser />
        <Users />
      </>
    </UsersContext.Provider>
  )
}

export default App;

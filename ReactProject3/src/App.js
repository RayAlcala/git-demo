import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);
  // we need to lift the state up so that the siblings UsersList and AddUser can communicate to each other
  // siblings cannot reach each other but they both reach the parent App.js

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList, 
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    });
  };

  return (
    <div>
        <AddUser onAddUser={addUserHandler} />
        {/* use the term on to denote an event will occur */}
        <UsersList users={usersList} />
    </div>
  );
  }

export default App;

import React, { useState, Fragment } from 'react';

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
    <Fragment>
        <AddUser onAddUser={addUserHandler} />
        {/* use the term on to denote an event will occur */}
        <UsersList users={usersList} />
    </Fragment>
    // you can also use empty tags <></> to wrap the components 
    // but this requires that the workflow is compatible with this syntax
    // or you can write React.Fragment if you didn't import Fragment 
  );
  }

export default App;

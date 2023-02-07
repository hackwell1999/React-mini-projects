import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';


function App() {

  let [usersList,setUsersList] = useState([]);

  let addUserHandler =(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList , {name:uName,age:uAge}];
    })
  }
  return (
    <div>
      <AddUser addUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Users from './components/Users';
import NewUser from './components/NewUser';
const App = () => {
   
const [userlist,setUserList]=useState([])
const onUserUpdateHandler=(enterdData)=>{
  console.log(enterdData)
  setUserList(preState=>{
return [enterdData, ...preState]
  })
}
  return (
    <div>
      <NewUser onUserUpdate={onUserUpdateHandler}/>
 <Users items={userlist}/>
    </div>
  );
};

export default App;

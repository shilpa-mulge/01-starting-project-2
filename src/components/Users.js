import React from "react";
import './Users.css';
import Card from "./Card";
import UserList from "./UserList";
const Users=(props)=>{
    return (
        <Card className="users">
      {props.items.map((list)=>{
      return  <UserList
      key={list.id}
        userName={list.userName}
        Age={list.Age}
        />
      })}
        </Card>
      );
}
export default Users;
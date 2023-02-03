import React from "react";
import './UserList.css';
import Card from "./Card";
const UserList = (props) => {
    return (
        <Card className="user-list">
        <h2>
           {props.userName} ( {props.Age} Years Old)
           </h2>
    </Card>
)
}
export default UserList;
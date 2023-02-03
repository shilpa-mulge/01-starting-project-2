import React from "react";
import './NewUser.css';
import UserForm from "./UserForm";
const NewUser=(props)=>{
    const OnSaveUserHandler=(enterdUserData)=>{
        const Userdata={
            ...enterdUserData,
            id: Math.random().toString(),
        }
        props.onUserUpdate(Userdata)
    }
    return <div className="new-user">
        <UserForm onSaveUserData={OnSaveUserHandler} />
    </div>
}
export default NewUser;
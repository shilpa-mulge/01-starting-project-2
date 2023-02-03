import React,{useState} from "react";
import './userForm.css';
import ErrorForm from "./ErrorForm";
const UserForm=(props)=>{
    const [error, setError]=useState()
   const[enterName, setEnterdName]= useState('');
 const NameChangeHandler=(event)=>{
    setEnterdName(event.target.value)
 }
 const[enterAge, setEnterdAge]= useState('');
 const AgeChangeHAndler=(event)=>{
    setEnterdAge(event.target.value);
 }
 const formSubmitHandler=(event)=>{
    event.preventDefault();
    const UserData={
        userName:enterName,
        Age:enterAge
    }
    if(enterName.trim().length===0||enterAge.trim().length===0){
      setError({
        title:"invalid data",
        message:"please enter valid name and age"
      })
      return;
    }
     if(+enterAge<1){
setError(
    {
        title:"invalid age",
        message:"please enter valid age"  
    }
)
return;
    }
   
props.onSaveUserData(UserData)
    setEnterdName('');
    setEnterdAge('');
 }
 const ErrorHandler=()=>{
    setError(null)
 }
return(
    <div>
       {error && <ErrorForm title={error.title} message={error.message} onError={ErrorHandler}/>}
     <form onSubmit={formSubmitHandler}>
        <div className="new-user__control" >
            <div className="new-user__control">
        <label>UserName</label>
        <input type='text' value={enterName} onChange={NameChangeHandler} />
        </div>

         <div className="new-user__control">
            <label>Age(Years)</label>
            <input type='number' value={enterAge} onChange={AgeChangeHAndler} />
       </div>
       </div>
       <div className="new-user__actions">
            <button type='submit'>Add User</button>
            </div>
    </form>
    </div>)
};
export default UserForm;
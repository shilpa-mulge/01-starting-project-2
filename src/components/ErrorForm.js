import React from "react";
import Card from "./Card";
import './ErrorForm.css';
const ErrorForm=(props)=>{
    return (
        <div>
            <div className="backdrop" onClick={props.onError}></div>
        <Card className='modal'>
            <header className="header"> <h2>{props.title}
            </h2></header>
           
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <button type="submit" onClick={props.onError}>Okay</button>
            </footer>
           
        </Card>
        </div>
    )
}
export default ErrorForm;
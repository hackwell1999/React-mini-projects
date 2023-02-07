import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./Adduser.module.css"
export default function AddUser(props) {
  let [enteredName,setEnteredName] =useState("");
  let [enteredAge,setEnteredAge] = useState("");
  let [error,setError] = useState();
    
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0){
        setError({
          title:"Invalid input",
          message:"Please enter a valid name and age (non-empty values)."
        })
        return;
    }
    if (+enteredAge < 1){
        setError({
          title:"Invalid age",
          message:"Please enter a valid age (> 0)."
        })
        return;
    }
    props.addUser(enteredName,enteredAge);
    setEnteredName('');
    setEnteredAge('');
  };

  const nameChangeHandler =(event)=>{
    setEnteredName(event.target.value)
  };
  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value)
  };

  const onErrorHandler =()=>{
    setError(null);
  }
  return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={onErrorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredName} onChange={nameChangeHandler} />

        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
}

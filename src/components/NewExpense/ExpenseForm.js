import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitleValue] = useState("");
  const [enteredAmount, setAmountValue] = useState("");
  const [enteredDate, setdateValue] = useState("");
  // const [userInput, setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     entereddate:''
  // })
  const titleChangeHandler = (event) => {
    setTitleValue(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle : event.target.value
    // });
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredTitle : event.target.value
    //     }
    // });
  };
  const amountChangeHandler = (event) => {
    setAmountValue(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount : event.target.value
    // });
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredAmount : event.target.value
    //     }
    // });
  };
  const dateChangeHandler = (event) => {
    setdateValue(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate : event.target.value
    // });
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         entereddate : event.target.value
    //     }
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitleValue('');
    setAmountValue('');
    setdateValue('');
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="23-05-2021"
            max="23-06-2021"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

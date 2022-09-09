import { useState } from 'react';
import "./ExpenseForm.css";
function ExpenseForm(props) {
  // const [enteredTitle,setEnteredTitle] = useState('dq')
  // const [enteredAmount,setEnteredAmount] = useState('dsdf')
  // const [enteredDate,setEnteredDate] = useState('sds')

  const [formInput, setForm] = useState({
    enteredTitle: "",
    enteredAmount: 0.0,
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    // console.log("inside title")
    // setForm({
    //     ...formInput,
    //     enteredTitle: event.target.value
    // })
    // setEnteredTitle(event.target.value)
    setForm((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setForm((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setForm((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };
//   setForm({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: formInput["enteredTitle"],
      amount: +formInput["enteredAmount"],
      date: new Date(formInput["enteredDate"]),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData)
    props.onCancel()

    setForm({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formInput["enteredTitle"]}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={formInput["enteredAmount"]}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={formInput["enteredDate"]}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

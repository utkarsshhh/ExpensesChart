import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from 'react'
function ExpenseItem(props) {
  // const ItemName = "Car Insurance";
  // const date = new Date(2022,2,22)
  // const price = 294.67
  const [title,setTitle] = useState(props.title)
//   let title = props.title
  const clickHandler = () => {
      console.log("Clicked!!")
      setTitle('Updated')
  };
  
  
  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          <div>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </div>
  );
}
export default ExpenseItem;

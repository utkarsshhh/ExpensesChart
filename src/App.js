
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import { useState } from "react";

const items = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 450,
    date: new Date(2022, 2, 22),
  },
  {
    id: "e2",
    title: "Bike Insurance",
    amount: 350,
    date: new Date(2022, 2, 22),
  },
  { id: "e3", title: "Toilet paper", amount: 5, date: new Date(2022, 2, 22) },
  { id: "e4", title: "New Desk", amount: 150, date: new Date(2022, 2, 22) },
];

function App() {

  const [expenses,setExpenseList] =  useState(items)
 const  addExpenseHandler = (newExpenseHandler) =>{

  console.log(newExpenseHandler,"  new expense handler app.js")

   setExpenseList((prevExpenseList) => {
    console.log([newExpenseHandler,...prevExpenseList])
    console.log(newExpenseHandler,"  newExpenseHandler")
    console.log(...prevExpenseList,"  ...prevExpenseList")
    return [newExpenseHandler,...prevExpenseList];
   })
   
 };
  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;

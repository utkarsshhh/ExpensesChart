import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"
function Expenses(expenses) {
  const [yearValue, setYear] = useState("2022");
  // const expense1 = expenses.items[0];
  // const expense2 = expenses.items[1];
  // const expense3 = expenses.items[2];
  // const expense4 = expenses.items[3];
  const selectChangeHandler = (selectData) => {
    setYear(selectData);
  };
  const filteredExpenses = expenses.items.filter(expense => expense.date.getFullYear().toString()===yearValue)

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter onChangeSelect={selectChangeHandler} />
        <ExpensesChart expenses = {filteredExpenses} />
        
        <ExpensesList items = {filteredExpenses}></ExpensesList>
        

        {/* <ExpenseItem
          title={expense1.title}
          amount={expense1.amount}
          date={expense1.date}
        ></ExpenseItem>
        <ExpenseItem
          title={expense2.title}
          amount={expense2.amount}
          date={expense2.date}
        ></ExpenseItem>
        <ExpenseItem
          title={expense3.title}
          amount={expense3.amount}
          date={expense3.date}
        ></ExpenseItem>
        <ExpenseItem
          title={expense4.title}
          amount={expense4.amount}
          date={expense4.date}
        ></ExpenseItem> */}
      </Card>
    </li>
  );
}

export default Expenses;

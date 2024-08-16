import { useState } from 'react'
import './App.css'

function App() {
  // const [expenseName, setExpenseName] = useState("");
  // const [expenseAmount, setExpenseAmount] = useState();
  const [expense, setExpense] = useState({
        type: "",
        amount: 0,
  });
  const [expenses, setExpenses] = useState([
    {
      type: "sample1",
      amount: "20"
    },
    {
      type: "sample2",
      amount: "10"
    },
  ]);
  const handleClick = () => {
    setExpenses(prev => [
      ...prev,
      {
        // type: expenseName,
        // amount: expenseAmount,
        type: expense.type,
        amount: expense.amount,
      },
    ]);
    // setExpenseName("");
    // setExpenseAmount("");
    setExpense({
      type: "",
      amount: "",
    })
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setExpense(prev => ({
      ...prev, [name]: value,
      // input icerisindeki name ve value kismini degistirmeyi hedefliyoruz
    }));
  };

  return (
    <>
      <h2>Expenses Tracker</h2>
      <p>Expense Type</p>
      <input type="text" 
        // value={expenseName} 
        // onChange={(e) => setExpenseName(e.target.value)}
        name="type"
        value={expense.type}
        onChange={(e) => handleChange(e)}
      />
      {/* value + onChange --> "controller input"  */}
      <br />
      <p>Amount of Expense</p>
      <input type="number" 
        // value={expenseAmount} 
        // onChange={(e) => setExpenseAmount(e.target.value)}
        name="amount"
        value={expense.amount}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <br />
      <button onClick={handleClick}>Add</button>
      <br />
      <hr />
      <h3>List of Expenses</h3>
      <ul>
        {expenses.map((item, index) => {
          return (
            <li key={index}>
              <span>{item.type} - </span>
              <span>£{item.amount}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App

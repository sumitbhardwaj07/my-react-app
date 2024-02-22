import ExpenseItem from './components/ExpenseItem';
import './App.css';
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: 'New Delhi',

  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: 'Rohtak',},
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: 'Jind',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    location: 'Mathura',
  },
];
function App() {
  return (
    <div>
      <h1>Let's get started!</h1>
      {expenses.map((expense)=>(
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default App;

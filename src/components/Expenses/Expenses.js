import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.items.map((expense)=>(
            <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
            ></ExpenseItem>
          ))}
        </Card>
    )
}

export default Expenses;
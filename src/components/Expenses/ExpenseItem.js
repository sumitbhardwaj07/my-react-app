import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title);
    const [amount,setAmount] = useState(props.amount);
    const clickHandler=()=>{
        setTitle('Updated!');
    }
    const clickHandler1=()=>{
        setAmount(100);
    }


    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">Rs{amount}</div>
        </div>
        <div className="expense-item__location">{props.location}</div>
        <button onClick={clickHandler}>Change title</button>
        <button onClick={clickHandler1}>Change expense</button>
    </Card>
    );
}

export default ExpenseItem;
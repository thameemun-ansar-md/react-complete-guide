import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const expenses=props.expenses;
    const [selectedFilter,changeSelectedFilter] = useState('2020');
    const filterChangeHandler = selectedYear => {
        changeSelectedFilter(selectedYear);
        console.log(selectedYear);
    }
    return (
        <Card className="expenses">
            <ExpenseFilter  selected={selectedFilter} onFilterChange={filterChangeHandler}/>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}>
            </ExpenseItem>
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}>
            </ExpenseItem>
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}>
            </ExpenseItem>
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}>
            </ExpenseItem>
        </Card>
    );
}

export default Expenses;
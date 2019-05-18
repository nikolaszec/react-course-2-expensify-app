import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'


export const ExpenseList = (props)=>(

    <div>
        {props.expenses.length===0?(
            <p>No expenses to display.</p>
        ):(
            props.expenses.map((expense)=>
            {return <ExpenseListItem key={expense.id} {...expense}/>}
            )
        )}
        
    </div>
)

const MapToProps = (state) => {
    return {
        expenses:selectExpenses(state.expenses,state.filters)
        
    }
}

export default connect(MapToProps)(ExpenseList)
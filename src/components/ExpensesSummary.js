import React from 'react'
import getTotalExpense from '../selectors/expensesTotal'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'


export const ExpensesSummary = ({expenseCount, expensesTotal})=>{

    const expenseWord = expenseCount===1?'expense':'expenses'
   const expensesTotalFormated  = numeral(expensesTotal).format('$0,0.00')

    return (
        <div>
        <h1>Viewing {expenseCount} {expenseWord} tottaling {expensesTotalFormated}</h1>
        
    </div>
    )

}

const mapStateToProps = (state)=> {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount:visibleExpenses.length,
        expensesTotal:getTotalExpense(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)
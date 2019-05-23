import React from 'react'
import getTotalExpense from '../selectors/expensesTotal'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'
import {Link} from 'react-router-dom'


export const ExpensesSummary = ({expenseCount, expensesTotal})=>{

    const expenseWord = expenseCount===1?'expense':'expenses'
   const expensesTotalFormated  = numeral(expensesTotal).format('$0,0.00')

    return (
        <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{expensesTotalFormated}</span></h1>
        <div className="page-header__actions">
            <Link className="button-partial" to="/create">Add Expense</Link>
        </div>
        </div>
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
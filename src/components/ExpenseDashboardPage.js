import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';


const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilter/>
    <ExpenseList ></ExpenseList>
  </div>
);



export default ExpenseDashboardPage;

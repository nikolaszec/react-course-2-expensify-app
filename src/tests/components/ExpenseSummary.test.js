import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme'
import React from 'react'

test('Should render correctly Expense Summary with 1  data', ()=>{

    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {123123} />)
    expect(wrapper).toMatchSnapshot()
})


test('Should render correctly Expense Summary with multiple data', ()=>{

    const wrapper = shallow(<ExpensesSummary expenseCount = {4} expensesTotal = {12311123} />)
    expect(wrapper).toMatchSnapshot()
})

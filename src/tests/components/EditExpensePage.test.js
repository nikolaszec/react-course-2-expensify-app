import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, history, wrapper, removeExpense

beforeEach(()=>{
    editExpense = jest.fn();
    history = {push:jest.fn()}
    removeExpense = jest.fn()
     wrapper = shallow(<EditExpensePage 
        editExpense={editExpense}
         history={history} 
         removeExpense={removeExpense}
          expense={expenses[1]}
          />)
})

test('Should render edit page correctly', ()=>{
    expect(wrapper).toMatchSnapshot()
})



test('Should render edit page correctly with passed data', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
   // wrapper.setProps({expense: {id:expenses[2].id}});
expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
   expect(wrapper).toMatchSnapshot()
})


test('Should remove expense from edit page correctly with button click', ()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({
        id:expenses[1].id
    })
  
})
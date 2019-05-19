import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default set', ()=>{

    const result = expensesReducer(undefined, {type:'@@INIT'})
    expect(result).toEqual([])
})


test('should remove expense by id', ()=>{

    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[0], expenses[2]])
})


test('should not remove expense if id not found ', ()=>{

    const action = {
        type:'REMOVE_EXPENSE',
        id:-1
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})

test('should add an expense',()=>{

    const expense = {
        id: '22',
        description:'nesto test',
        note:'sda',
        amount:123,
        createdAt:1123
      }
    const action = {
        type:'ADD_EXPENSE',
        expense
       
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', ()=>{


    const amount = 108989

    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
   
})



test('should not edit an expense if id is not found', ()=>{


    const amount = 108989

    const action = {
        type:'EDIT_EXPENSE',
        id:'13',
        updates:{
            amount
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
    
})



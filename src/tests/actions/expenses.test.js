import {removeExpense, editExpense, addExpense} from '../../actions/expenses'


test('should setup remove expense action object',()=>{

    const result = removeExpense({id:'1234abcd'})
    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id:'1234abcd'
    })
})

test('should setup edit expense action object',()=>{
    const updates = {
        description:'Rent'
    }
    const result = editExpense('123',updates)

    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:'123',
        updates:{
            description:'Rent'
        }
    })
})


test('should setup add expense action object', ()=>{

    const data = {
        description:'Test',
        note:'123',
        amount:123.21,
        createdAt:123213
    }

    const result = addExpense(data)

    expect(result).toEqual({
        type:'ADD_EXPENSE',
        expense:{

            ...data,
            id:expect.any(String)
        }
       
       
    })
})

test('should setup add expense default state action object', ()=>{

   
    
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description : '',
    note : '',
    amount : 0,
    createdAt : 0,
    id:expect.any(String)
        }
    })

})
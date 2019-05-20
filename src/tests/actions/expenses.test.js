import {removeExpense, editExpense, addExpense, startAddExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { database } from '../../firebase/firebase';

//jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000; // 10 second timeout

const createMockStore = configureMockStore([thunk])

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


    const result = addExpense(expenses[2])

    expect(result).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
       
    })
})

test('should add expense to database',(done)=>{

    const store = createMockStore({})

    const dataExpense = {
        description:'Some desc',
        amount:100,
        createdAt:100,
        note:'Nothing special'
    }

    store.dispatch(startAddExpense(dataExpense)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...dataExpense
            }
        })
       return  database.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(dataExpense)
       done()
    }).catch((err) => {})

   
})

test('Should add expense to database with default data', (done)=>{
    
    const store = createMockStore({})

    const dataExpense = {
        description:'',
        amount:0,
        createdAt:0,
        note:''
    }

    store.dispatch(startAddExpense(dataExpense)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...dataExpense
            }
        })

        
       return  database.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(dataExpense)
       done()
    }).catch((err) => {})

})

// test('should setup add expense default state action object', ()=>{

   
    
//     const action = addExpense()
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             description : '',
//     note : '',
//     amount : 0,
//     createdAt : 0,
//     id:expect.any(String)
//         }
//     })

// })
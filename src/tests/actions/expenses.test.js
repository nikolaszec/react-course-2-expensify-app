import {removeExpense, editExpense, addExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import  database  from '../../firebase/firebase';
import expensesReducer from '../../reducers/expenses'

//jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000; // 10 second timeout

const createMockStore = configureMockStore([thunk])

beforeEach((done)=>{
    const expensesData = {}
    expenses.forEach(({id, description, note, amount, createdAt})=>{
        expensesData[id]={description, note, amount, createdAt}
    })
    database.ref('expenses').set(expensesData).then(()=>done())
})


test('should setup remove expense action object',()=>{

    const result = removeExpense({id:'1234abcd'})
    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id:'1234abcd'
    })
})

test('should remove data from firebase',(done)=>{
    const store =  createMockStore({})
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({ id })).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        })
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy()

        done()
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

test('Should edit expenses in database', (done)=> {

    const store  = createMockStore({})

    const id = expenses[0].id

    const updates = {

    amount:233
    }
    
    store.dispatch(startEditExpense(id, updates)).then(()=>{

        const actions = store.getActions()

        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            updates
        })

        return database.ref(`expenses/${id}`).once('value')

    }).then((snapshot)=>{
        expect(snapshot.val().amount).toBe(updates.amount)


        done()
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
    }).catch((err) => {
        console.log(err)
    })

})

test('should setup set expense action object with data', ()=>{

    const action = setExpenses(expenses)
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
})

test('should set expense', ()=> {
    const action = {
        type:'SET_EXPENSES',
        expenses:[expenses[1]]
    }

    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[1]])
})

test('should fetch the expenses from firebase',(done)=>{
    const store = createMockStore({})

    store.dispatch(startSetExpenses()).then(()=>{
        const action = store.getActions()

        expect(action[0]).toEqual(
            {
                type:'SET_EXPENSES',
                expenses
            }
        )

        done()
    })
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
import getTotalExpenses from '../../selectors/expensesTotal'
import expenses from '../fixtures/expenses';


test('should return 0 if no expenses', ()=> {
    const num = getTotalExpenses(expenses)
    expect(num).toEqual(600)
})

test('should correctly add up a single expense', ()=>{
    const res = getTotalExpenses([expenses[0]])
    expect(res).toBe(100)
})


test('should correctly add up a multiple expenses', ()=>{
    const res = getTotalExpenses(expenses)
    expect(res).toBe(600)
})





// test('Should render correctly Expense Summary', ()=>{

//     const wrapper = shallow(<ExpensesSummary expenses = {expenses} />)
//     expect(wrapper).toMatchSnapshot()
// })



export default (expenses)=> {
    return  expenses.map((expense)=>expense.amount).reduce((accumulator, currentValue)=>{return accumulator+currentValue},0)

  
}

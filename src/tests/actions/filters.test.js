import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters'
import moment from 'moment'



test('should generate setStartDate action object', ()=>{
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate setEndDate action object', ()=>{
   
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate setup setTextFilter  action object',()=>{
     const action = setTextFilter('some text to test')

     expect(action).toEqual({
         type:'SET_TEXT_FILTER',
         text:'some text to test'
     })
})

test('should generate setup textFilter action object default state',()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''

    })
})

test('should sort data by date', ()=>{

    const action = sortByDate()

    expect(action).toEqual({
        type:'SORT_BY_DATE'
       
    })

})

test('should sort data by amount',()=>{

    const action = sortByAmount()

    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
       
    })

    
})
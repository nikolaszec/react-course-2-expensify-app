import filterReducer from '../../reducers/filters'
import moment from 'moment'


test('should set default filter values', ()=>{
    const state = filterReducer(undefined, {type: '@@INIT'})

    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})


test('should set sortBy to amount',()=>{
    const state = filterReducer(undefined, {type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toEqual('amount')
})

test('should set sortBy to date',()=>{

    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }

    

    const state = filterReducer(currentState, {type:'SORT_BY_DATE'})
    expect(state.sortBy).toEqual('date')
})

test('should set text filter', ()=>{
   
    
    const text = 'proba'
    const state = filterReducer(undefined, {type:'SET_TEXT_FILTER', text})
    
    expect(state.text).toBe(text)
})

test('should set startDate filters',()=>{

    const startDate = moment()
    const state = filterReducer(undefined, {type:'SET_START_DATE', startDate})

   
    expect(state.startDate).toEqual(startDate)
})


test('should set endDate filters',()=>{

    const endDate = moment()
    const state = filterReducer(undefined, {type:'SET_END_DATE', endDate})

   
    expect(state.endDate).toEqual(endDate)
})
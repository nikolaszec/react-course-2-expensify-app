import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilter} from '../../components/ExpenseListFilter'
import {filters, altFilters} from '../fixtures/filters'

import moment from 'moment'
let setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, wrapper

beforeEach(()=>{
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    setTextFilter=jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()

    wrapper = shallow(
        <ExpenseListFilter
        filters = {filters}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
         setTextFilter = {setTextFilter}
         sortByAmount = {sortByAmount}
         sortByDate = {sortByDate}
          />)
})

test('should setup default states for filters', ()=> {

    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', ()=> {
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', ()=> {

    const text = 'something';
    wrapper.find('input').simulate('change',{
        target:{
            value:text
        }
    })

    expect(setTextFilter).toHaveBeenLastCalledWith(text)
})


test('should sort by date', ()=> {

    const value = 'date'
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find('select').simulate('change',{
        target:{
            value:value
        }
    })

    expect(sortByDate).toHaveBeenCalled()
})


test('should sort by amount', ()=> {

    const value = 'amount'
    
    wrapper.find('select').simulate('change',{
        target:{
            value:value
        }
    })

    expect(sortByAmount).toHaveBeenCalled()
})

test('should sort by start and date', ()=> {
    const startDate  = moment(0).add(4,'years')
    const endDate = moment(0).add(9,'years')

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should check calendar focused', ()=> {

    const calendarFocused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocus')).toBe(calendarFocused)


})
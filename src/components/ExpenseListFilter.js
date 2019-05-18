import React from 'react'
import {connect} from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/initialize'
import {DateRangePicker} from 'react-dates'


export class ExpenseListFilter extends React.Component {

    state = {
        calendarFocus:null
    }

    onDatesChange = ({startDate,endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocus)=>{
        this.setState(()=>({
            calendarFocus
        }))
    }

    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value)
        }

        sortByChange = (e)=>{

            
            switch(e.target.value){
                case 'amount':
                this.props.sortByAmount()
                break;
 
                case 'date':
                this.props.sortByDate()
                break;
            }
         }

    render(){
     return (<div>
        <input type= 'text'
         value={this.props.filters.text} 
         onChange={this.onTextChange}/>

        <select 
        value = {this.props.filters.sortBy}
    
        onChange={this.sortByChange}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
        <DateRangePicker 
            startDateId = 'start'
            endDateId ='end'
            startDate = {this.props.filters.startDate}
            endDate = {this.props.filters.endDate}
            onDatesChange= {this.onDatesChange}
            focusedInput = {this.state.calendarFocus}
            onFocusChange = {this.onFocusChange}
            numberOfMonths = {1}
            isOutsideRange = {()=>false}
            showClearDates = {true}
        />

    </div>)
    }
}



const mapStateToProps = (state) => {
    return {
        filters:state.filters
    }
}

const mapDispatchToProps = (dispatch)=> ({
setStartDate: (startDate)=> dispatch(setStartDate(startDate)),
setEndDate:(endDate) => dispatch(setEndDate(endDate)),
setTextFilter:(value)=>dispatch(setTextFilter(value)),
sortByAmount:()=>dispatch(sortByAmount()),
sortByDate:()=>dispatch(sortByDate())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter)
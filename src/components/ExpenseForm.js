import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize'


class ExpenseForm extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            description: props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?props.expense.amount.toString():'',
            createdAt:props.expense? moment(props.expense.createdAt):moment(),
            calendarFocus:false,
            error:''
        }
    }
    
    handleDecscription = (e) =>{
        const description = e.target.value

        this.setState(()=>({
            description
        }))
        
       
    }

    handleNote = (e) =>{
        const note = e.target.value

        this.setState(()=>({
            note
        }))
    }

    handleAmount = (e)=>{
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({
                amount
            }))
        }
    }

    onDateChange = (createdAt)=>{
        if(createdAt){
            this.setState(()=>({
                createdAt
            }))

        }
       
    }

    onFocusChange = ({focused})=>{
        this.setState(()=>({
            calendarFocus:focused
        }))
    }

    onSubmit = (e)=>{
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({
                error:'Please provide description and amount'
            }))
        }else{
            this.setState(()=>({
                error:''
            }))

           
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount),
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note

            })

        }

        
        
       
    }

    render(){
       
              
        return   (<form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}  
                    <input className="text-input" type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.handleDecscription} />
                    <input className="text-input" type= "text" placeholder = "Amount" value={this.state.amount} onChange={this.handleAmount}/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused ={this.state.calendarFocus}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange ={()=>{false}}
                    />
                    <textarea
                    className="textarea"
                     placeholder="Add a note for your expenses (optional)" onChange={this.handleNote} value={this.state.note}>
                    </textarea>

                    <div>
                    
                    <button className="button-partial">Save expense</button>
                    </div>



                </form>
               )

    }
}

export default ExpenseForm
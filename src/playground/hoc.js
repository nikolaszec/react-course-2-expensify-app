import React from 'react'
import ReactDOM from 'react-dom'

console.log('it is working')

const Info = (props) => (
    <div>
        <h1>This is some info</h1>
        <p>Some info is: {props.info}</p>
    </div>
)


const AuthInfo = (WrapperComponent)=>{
    return (props)=>(
        <div>
           {props.isAdmin && <h3>Content from HOC --high ordered component</h3>} 
            <WrapperComponent {...props}/>
        </div>
    )
}

const AuthInfoComp = AuthInfo(Info)

ReactDOM.render(<AuthInfoComp isAdmin={true} info='THOSE ARE INFOS'/>, document.getElementById('app'))
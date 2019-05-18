import React from 'react'
import {BrowserRouter, Route, Switch, Link,NavLink} from 'react-router-dom';



const PageNotFound = () =>(
    <div>
    404 <Link to="/">Go Home</Link>
    </div>
)

export default PageNotFound
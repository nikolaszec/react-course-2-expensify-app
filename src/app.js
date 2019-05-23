import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import {firebase} from './firebase/firebase'
import {login, logout} from './actions/auth'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './playground/promise'
import {historyRouter} from './routers/AppRouter'
import LoadingPage from './components/LoadingPage'

const store = configureStore();


const jsx = (
    
   
    <Provider store={store}>
    <AppRouter />

    </Provider>
   
    
    
);

let hasRendered = false;
const renderApp = () => {

    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user)=> {
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
           renderApp()
           if(historyRouter.location.pathname === '/'){
            historyRouter.push('/dashboard')
           }

        })
    }else{
        store.dispatch(logout())
        renderApp()
        historyRouter.push('/')
    }
})
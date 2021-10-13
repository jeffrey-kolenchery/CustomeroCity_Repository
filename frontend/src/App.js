import './App.css'
import { HomePage } from './containers/HomePage'
import React  from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/UserAccount/SignUp'
import Login from './components/UserAccount/Login'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path = "/Signup" component={SignUp} />
                    <Route exact path = "/Login" component={Login} />
                </Switch>
            </Router>
        </div>
    )
}

export default App

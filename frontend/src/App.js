import './App.css'
import { HomePage } from './containers/HomePage'
import React  from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/UserAccount/SignUp'
import Login from './components/UserAccount/Login'
import UserProfile from './components/Profile/UserProfile'
import ClientProfile from './components/Profile/ClientProfile'
import Contacts from './components/Contacts'
import Addcustomer from './components/Profile/Addcustomer'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path = "/Signup" component={SignUp} />
                    <Route exact path = "/Login" component={Login} />
                    <Route exact path = "/UserProfile" component={UserProfile} />
                    <Route exact path = "/ClientProfile/:customerId" component={ClientProfile} />
                    <Route exact path = "/Search" component={Contacts} />
                    <Route exact path = "/AddCustomer" component={Addcustomer} />
                </Switch>
            </Router>
        </div>
    )
}

export default App

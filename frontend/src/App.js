import './App.css'
import { HomePage } from './containers/HomePage'
import React  from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/UserAccount/SignUp'
import Login from './components/UserAccount/Login'
import UserProfile from './components/Profile/UserProfile'
import CustomerProfile from './components/Profile/CustomerProfile'
import CustomerProfileOpen from './components/Profile/CustomerProfileOpen'
import Contacts from './components/Contacts'
import Addcustomer from './components/Profile/Addcustomer'
import { Dashboard } from './components/Dashboard'
import ResetPassword from './components/Profile/ResetPassword'
import Test from './components/Test'
import Map from './components/Map'
import DashboardCard from './components/Dashboard/dashboard'
import ScheduleMeeting from './components/Profile/ScheduleMeeting'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path = "/Signup" component={SignUp} />
                    <Route ex act path = "/Login" component={Login} />
                    <Route exact path = "/UserProfile" component={UserProfile} />
                    <Route exact path = "/CustomerProfile" component={CustomerProfile} />
                    <Route exact path = "/CustomerProfileEdit" component={CustomerProfileOpen} />
                    <Route exact path = "/Dashboard" component={Dashboard} />
                    <Route exact path = "/Contacts" component={Contacts} />
                    <Route exact path = "/ResetPassword" component={ResetPassword} />
                    <Route exact path = "/AddCustomer" component={Addcustomer} />
                    <Route exact path = "/Test" component={Test} />
                </Switch>
            </Router> 
        </div>
    )
}

export default App

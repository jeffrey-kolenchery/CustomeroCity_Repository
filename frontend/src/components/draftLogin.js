import React from 'react'
// import { useForm } from "react-hook-form"

import history from '../history'
import { userLogin } from '../api'
import './Login.css'

class UserLogin extends React.Component {


    //eslint 
    state={
        username : '',
        password : ''
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmitButton = () => {
        try {
            userLogin(this.state.username, this.state.password)
            console.log('user attempted to log in')
            // history.push("/user/register")
        }
        catch (error) {
            console.log('user login failed')
            console.log(error)
        }
    }

    LoginPanel = () => {

        return (
            <div className="login-panel">
                <h1 className="login-panel__heading heading">
                    <span>Please enter your details</span>
                </h1>
      
                <form className="login-panel__form">
                    <div> 
                        <label className="login-panel__form-header normaltext">Email: </label>
                        <input
                            type="email"
                            className="form-item"
                            onChange={this.handleUsernameChange}
                            value={this.state.username}
                            name="email"
                        />
                    </div>
                    <div>
                        <label className="login-panel__form-header normaltext">Password: </label>
                        <input
                            type="password"
                            className="login-panel__form-item"
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                            name="password"
                        />
                    </div>
                    <button
                        type="submit"
                        id="login-panel__submitbtn"
                        className="login-panel__form-item subheading"
                        onClick = {this.handleSubmitButton}
                    >
                  Login
                    </button>
                </form>
                {/* <Link to={"/register/"}>
              <div
                id="login-panel__submitbtn"
                className="login-panel__form-item subheading"
              >
                Register
              </div>
              </Link> */}
            </div>
        )
    }

    render() {
        return (
            // this centers the page contents
            <div id="page-container" className="container-center-horizontal red-background" >
                <div id="login__contents" className="container-center-vertical">
                    <div className="login__bottom-panel">
                        <this.LoginPanel />
                    </div>
                </div>
            </div>
        )
    }
}


export default UserLogin
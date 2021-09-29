import React from "react"
import { useForm } from "react-hook-form"

import history from '../history'
import { userLogin } from '../api'
import './Login.css'

class UserLogin extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            username : '',
            password : ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            // this centers the page contents
            <div id="page-container" className="container-center-horizontal red-background" >
                <div id="login__contents" className="container-center-vertical">
                    <div className="login__bottom-panel">
                        <LoginPanel />
                    </div>
                </div>
            </div>
        )
    }
}
export default UserLogin;

// FUNCTIONAL COMPONENTS
// Handles the Login form
function LoginPanel() {
  const { register } = useForm();

  return (
    <div className="login-panel">
      <h1 className="login-panel__heading heading">
        <span>Please enter your details</span>
      </h1>

      <form className="login-panel__form">
        <label className="login-panel__form-header normaltext">Email</label>
        <input
          type="email"
          className="form-item"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          name="email"
          {...register("email", { required: true })}
        />
        <label className="login-panel__form-header normaltext">Password</label>
        <input
          type="password"
          className="login-panel__form-item"
          value={this.state.password}
          name="password"
          {...register("password", { required: true })}
        />
        <button
          type="submit"
          id="login-panel__submitbtn"
          className="login-panel__form-item subheading"
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
  );
}

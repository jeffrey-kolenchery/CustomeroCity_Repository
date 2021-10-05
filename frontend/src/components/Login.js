/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

import { userLogin } from '../api'

// Api calls
//import { APIloginUser } from "../../../app/apiCalls";

function Login() {
    return (
    // this centers the page contents
        <div
            id="page-container"
            className="container-center-horizontal red-background"
        >
            <div id="login__contents" className="container-center-vertical">
                <div className="login__bottom-panel">
                    <LoginPanel />
                </div>
            </div>
        </div>
    )
}
export default Login

// FUNCTIONAL COMPONENTS
// Handles the Login form
function LoginPanel() {
    const history = useHistory()
    const { register, handleSubmit } = useForm()

    // async function onSubmit(data) {
    //   await APIloginUser(
    //     {
    //       email: data.email,
    //       password: data.password,
    //     },
    //     history
    //   );
    // }
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
                    name="email"
                    {...register('email', { required: true })}
                />
                <label className="login-panel__form-header normaltext">Password</label>
                <input
                    type="password"
                    className="login-panel__form-item"
                    name="password"
                    {...register('password', { required: true })}
                />
                <button
                    type="submit"
                    id="login-panel__submitbtn"
                    className="login-panel__form-item subheading"
                >
          Login
                </button>
            </form>
            <Link to={'/register/'}>
                <div
                    id="login-panel__submitbtn"
                    className="login-panel__form-item subheading"
                >
          Register
                </div>
            </Link>
        </div>
    )
}
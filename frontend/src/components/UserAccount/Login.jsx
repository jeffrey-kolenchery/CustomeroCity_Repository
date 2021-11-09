/* eslint-disable quotes */
import React from 'react'
import { Navbar } from "../navbar"
import { userLogin } from '../../api'
import { useForm } from 'react-hook-form'

class Login extends React.Component {
    state = {
        username : "",
        password : ""
    }

    dataForming = (data) => {
        this.setState(
            {
                username : data.username,
                password : data.password
            }
        )
    }

    onSubmit = () => {
        try {
            userLogin(this.state)
        
        } catch (error) {
            console.log('user login failed')
            console.log(error)
        }
        //window.location.assign('/Contacts')
    }

  LoginPanel = () => {
      const { register, handleSubmit, formState: {errors} } = useForm()

      return (
          <>
              <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" />

              <div className="min-h-screen flex flex-col items-center justify-center bg-whites">
                  <div className="flex flex-col bg-purple-50 shadow-md px-4 -mt-24 sm:px-6 md:px-8 lg:px-10 py-12 rounded-md h-full max-h-md w-full max-w-md">
                      <div className="self-start text-2xl font-semibold text-black font-mono">Welcome Back!</div>
                      <div className="self-start text-black font-thin font-mono mb-8">Login To Your Account</div>
                      <div className="mt-10">
                          <form onSubmit = {handleSubmit((data) => {
                              this.dataForming(data)
                              this.onSubmit()
                          })} >
                              <div className="flex flex-col mb-6">
                                  <div className="relative">
                                      <input type="username" placeholder="Username" {...register("username", { required: true })} className="font-mono text-sm placeholder-gray-500 pl-4 pr-4 rounded-lg border w-full py-2 focus:outline-none focus:border-blue-400" />
                                      {errors.email && <p>This field is required</p>}
                                  </div>
                              </div>
                              <div className="flex flex-col mb-6">
                            
                                  <div className="relative">
                                      <input type="password" placeholder="Password" {...register("password", { required: true })} className="font-mono text-sm placeholder-gray-500 pl-4 pr-4 rounded-lg border w-full py-2 focus:outline-none focus:border-blue-400" />
                                      {errors.password && <p>This field is required</p>}
                                  </div>
                              </div>
                    
                              <div className="flex items-center mb-10 -mt-4">
                                  <div className="flex ml-auto">
                                      <a href="#" className="font-mono inline-flex text-xs text-purple-600 hover:text-black">Forgot Your Password?</a>
                                  </div>
                              </div>
                    
                              <div className="flex w-full mb-4">
                                  <button type="submit" className="flex items-center justify-center focus:outline-none text-white font-mono text-sm sm:text-base bg-purple-600 hover:bg-pink-600 rounded py-2 w-full transition duration-150 ease-in">
                                      <span className="mr-2">Login</span>
                                      <span>
                                          <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                              <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          </svg>
                                      </span>
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </>
      )
  }

  render() {
      return (
          <>
              <Navbar />
              <this.LoginPanel/>
          </>
              
      ) 
  }
  
}


export default Login
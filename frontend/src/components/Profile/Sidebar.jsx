import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userSignOut } from '../../api'
import axios from 'axios'
import profilepic from '../../images/profilepic.png'
import { customerData } from '../../api.js'

const Sidebar = () => {

    var BASE_URL = 'https://customerocity.herokuapp.com/api'
    // var BASE_URL = 'http://localhost:5000/api'

    const [user, setUser] = useState('')
    const [contactList, setContactList] = useState([])
    const [filterQuery, setFilterQuery] = useState()
    customerData(setContactList)

    async function userView() {
        let config = {
            headers: {
                'Authorization': `bearer ${window.sessionStorage.getItem('token')}`
            }
        }
        const endpoint = `${BASE_URL}/user/viewuser/${window.sessionStorage.getItem('userId')}`
        const user = await axios.get(endpoint)
        console.log('USER DATA>>>>>>>>>>')
        console.log('herehere' + user.data)
        setUser(user.data[0])
    }

    useEffect(() => {
        userView()
        setContactList(contactList)
    }, [])

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <>
            <div className="flex flex-no-wrap">
                <div style={{ minHeight: '810px' }} className="w-96 absolute sm:relative bg-purple-200 shadow md:h-full flex-col justify-between hidden sm:flex">
                    <div className="px-8">
                        <div className="h-16 w-full flex items-center">
                            <span className="text-lg -ml-2 text-purple-800 font-semibold font-mono">CustomeroCity</span>
                        </div>
                        <img src={profilepic} className="w-20 h-20 rounded-3xl" />
                        <div>
                            <div className="p-3 -mt-20 ml-16">
                                {user != '' && (<div><h3 className="text-lg font-mono">{user.givenName}</h3>
                                    <h4 className="text-sm font-mono">{user.email}</h4></div>)}
                            </div>

                        </div>
                        <ul className="mt-12">
                            <li className="flex w-full justify-between text-black cursor-pointer items-center mb-4">
                                <a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={4} y={4} width={6} height={6} rx={1} />
                                        <rect x={14} y={4} width={6} height={6} rx={1} />
                                        <rect x={4} y={14} width={6} height={6} rx={1} />
                                        <rect x={14} y={14} width={6} height={6} rx={1} />
                                    </svg>
                                    <Link to="/Dashboard">
                                        <span className="text-sm ml-2 text-black font-mono">Dashboard</span>
                                    </Link>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-black hover:text-pink-600 cursor-pointer items-center mb-4">
                                <a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                                    </svg>
                                    <Link onClick = {() => {window.location.assign('/Contacts')}}>
                                        <span className="text-sm ml-2 text-black hover:text-pink-600 cursor-pointer font-mono">Contacts</span>
                                    </Link>

                                </a>
                            </li>
                            <li className="flex w-full justify-between text-black hover:text-pink-600 cursor-pointer items-center mb-4">
                                <a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                    <Link to="/ResetPassword">
                                        <span className="text-sm ml-2 text-black hover:text-pink-600 cursor-pointer font-mono">Reset Password</span>
                                    </Link>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-black hover:text-pink-600 cursor-pointer items-center mb-4">
                                <a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                    </svg>
                                    <Link to="/" onClick={(e) => {
                                        userSignOut()
                                        window.sessionStorage.clear()
                                    }}>
                                        <span className="text-sm ml-2 text-black hover:text-pink-600 cursor-pointer font-mono">Logout</span>
                                    </Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {contactList.length >= 1 && (
                        <>
                            <div className="mt-2 h-16 w-full flex items-center">
                                <span className="text-lg ml-6 text-purple-800 font-semibold font-mono">Recent Contacts</span>
                            </div>
                            <div className="ml-6 w-72 h-28 container flex justify-center bg-purple-600">
                                <img src={profilepic} className="w-20 h-20 rounded-3xl mt-3" />
                                <div>
                                    <div className="p-3 mt-2 ml-2">
                                        <h3 className="text-md font-mono text-white">{contactList[0].givenName}</h3>
                                        <Link to='#'
                                            onClick={(e) => {
                                                window.location = `${`mailto:hello@gmail.com?subject=${''}&body=${''}`}`
                                            }}>
                                            <h5 className="text-xs font-mono text-white">{contactList[0].email}</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-6 w-72 h-28 container flex justify-center bg-purple-600">
                                <img src={profilepic} className="w-20 h-20 rounded-3xl mt-3" />
                                <div>
                                    <div className="p-3 mt-2 ml-2">
                                        <h3 className="text-md font-mono text-white">{contactList[1].givenName}</h3>
                                        <Link to='#'
                                            onClick={(e) => {
                                                window.location = `${`mailto:hello@gmail.com?subject=${''}&body=${''}`}`
                                            }}>
                                            <h5 className="text-xs font-mono text-white">{contactList[1].email}</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-6 mb-6 w-72 h-28 container flex justify-center bg-purple-600">
                                <img src={profilepic} className="w-20 h-20 rounded-3xl mt-3" />
                                <div>
                                    <div className="p-3 mt-2 ml-2">
                                        <h3 className="text-md font-mono text-white">{contactList[2].givenName}</h3>
                                        <Link to='#'
                                            onClick={(e) => {
                                                window.location = `${`mailto:${contactList[2].email}?subject=${''}&body=${''}`}`
                                            }}>
                                            <h5 className="text-xs font-mono text-white">{contactList[2].email}</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </>
    )
}

export default Sidebar
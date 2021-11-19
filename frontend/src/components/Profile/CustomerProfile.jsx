import React, { useState, useEffect } from 'react'
import { SidebarData } from './SidebarData'
import './UserProfile.css'
import profilepicture from '../../images/profilepic.png'
import Map from '../Map'
import axios from 'axios'
import { customerData, userSignOut, customerDelete } from '../../api'
import { Link } from 'react-router-dom'
import MeetingData from './MeetingData'

const CustomerProfile = () => {
    // var BASE_URL = 'https://customerocity.herokuapp.com/api'
    var BASE_URL = 'http://localhost:5000/api'

    const [user, setUser] = useState('')
    const [contactList, setContactList] = useState([])
    const [meetings, setMeetings] = useState([])
    const [filterQuery, setFilterQuery] = useState()

    async function customerData() {

        try {
            let config = {
                headers: {
                    'Authorization': `bearer ${window.sessionStorage.getItem('token')}`,
                }
            }
            const endpoint = `${BASE_URL}/customer/customerdata/${window.sessionStorage.getItem('userId')}`
            window.sessionStorage.getItem('token')
            const customers = await axios.get(endpoint, config)
            console.log(customers)
            // console.log(customers)
            setContactList(customers.data)
        } catch (err) {
            console.error(err)
        }

    }


    async function getMeetings() {
        let config = {
            headers: {
                'Authorization': `bearer ${window.sessionStorage.getItem('token')}`
            }
        }
        const endpoint = `${BASE_URL}/meeting/getMeetings/${window.sessionStorage.getItem('userId')}`
        const user = await axios.get(endpoint, config)
        console.log('USER DATA')
        console.log(user)
        const filteredMeetings = user.data.filter(meeting => meeting.customer == window.sessionStorage.getItem('currentCustomer'))
        setMeetings(filteredMeetings)
    }

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

    async function customerReturn() {
        try {
            let config = {
                headers: {
                    'Authorization': `bearer ${window.sessionStorage.getItem('token')}`
                }
            }

            const endpoint = `${BASE_URL}/customer/returncustomer/${window.sessionStorage.getItem('userId')}/${window.sessionStorage.getItem('currentCustomer')}`
            const data = await axios.get(endpoint, config)
            console.log(data.data[0])
            setContactList(data.data[0])
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        userView()
        getMeetings()
        customerReturn()
    }, [])

    useEffect(() => {
        console.log(user)
        console.log(meetings)
        console.log(contactList)
    }, [user, meetings, contactList])

    return (
        <>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
                <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
                    <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-purple-600 dark:bg-gray-800 border-none">
                        <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
                        <span className="hidden md:block">{user.givenName}</span>
                    </div>
                    <div className="flex justify-between items-center h-14 w-11/12 bg-purple-600 dark:bg-gray-800 header-right">
                    </div>
                </div>
                <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-purple-500 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
                    <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                        <ul className="flex flex-col py-4 space-y-1">
                            <li className="px-5 hidden md:block">
                                <div className="flex flex-row items-center h-8">
                                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                                </div>
                            </li>
                            <li>
                                <a href="Dashboard" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Contacts" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Contacts</span>

                                </a>
                            </li>
                            <li>
                                <a href="/ResetPassword" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Reset Password</span>
                                </a>
                            </li>
                            <li>
                                <Link to="/" onClick={(e) => {
                                    userSignOut()
                                    window.sessionStorage.clear()
                                }}>
                                    <a href="/" onClick={(e) => {
                                        userSignOut()
                                        window.sessionStorage.clear()
                                    }} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span className="nline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="px-5 hidden md:block">
                                <div className="flex flex-row items-center mt-5 h-8">
                                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                    <div className="flex justify-end px-6 p-2 gap-3">
                        <Link to='#'
                            onClick={(e) => {
                                window.location = 'CustomerProfileEdit'
                            }}>
                            <button type="submit" className="bg-purple-500 hover:bg-blue text-white rounded-xl font-semibold hover:text-white py-1 px-8 border border-blue hover:border-transparent">Edit Fields</button>
                        </Link>
                        <Link to='#'
                            onClick={(e) => {
                                customerDelete()
                            }}>
                            <button type="submit" className="bg-purple-600 text-white px-8 py-1 rounded-lg">Delete Profile</button>
                        </Link>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }} className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
                        <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                            <div className="w-full overflow-x-auto">
                                <img alt="user" className="w-32 h-32 rounded-full mx-auto mt-7" src={profilepicture} />
                                <div className="font-bold text-xl mb-2">{contactList.givenName}  </div>
                                <div className="font-bold text-x3">Designation:</div>
                                <p className="text-grey-darker text-base">{contactList.designation}</p>
                                <div className="font-bold text-x3">Company:</div>
                                <p className="text-grey-darker text-base">{contactList.company}</p>
                                <div className="font-bold text-x3">Phone Number:</div>
                                <p className="text-grey-darker text-base">{contactList.phoneNo}</p>
                                <div className="font-bold text-x3">Email:</div>
                                <p className="text-grey-darker text-base">{contactList.email}</p>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{(contactList.interests != undefined && contactList.interests.length > 0) ? contactList.interests[0] : 'interest1'}</span>
                                    <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{(contactList.interests != undefined && contactList.interests.length > 1) ? contactList.interests[1] : 'interest2'}</span>
                                    <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{(contactList.interests != undefined && contactList.interests.length > 2) ? contactList.interests[2] : 'interest3'}</span>
                                </div>
                                <Link to='/ScheduleMeeting'>
                                    <button className="bg-purple-500 hover:bg-blue text-white rounded-xl font-semibold hover:text-white py-1 px-3 border border-blue hover:border-transparent mb-4">Schedule Meeting</button>
                                </Link>
                            </div>

                        </div>
                        <div className="font-bold text-xl mb-2">Past and Upcoming Meetings:</div>
                        <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                            {meetings.map((element, i) => {
                                return (
                                    <div key={i}
                                        className="w-full overflow-x-auto">
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="px-6 pt-4 pb-2">
                                            <div style={{ width: '33%' }}><div className="font-bold text-xl mb-2">Location:</div>
                                                <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{element.loc}</span></div>
                                            <div style={{ width: '33%' }}> <div className="font-bold text-xl mb-2">Description: </div>
                                                <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{element.Description}</span></div>
                                            <div style={{ width: '33%' }}>
                                                <div className="font-bold text-xl mb-2">Date:</div>
                                                <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{element.StartTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default CustomerProfile
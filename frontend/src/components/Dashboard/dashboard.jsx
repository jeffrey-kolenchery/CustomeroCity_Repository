import React from 'react'
import useFetch from 'react-fetch-hook'
import ContactCards from '../Contacts/Cards'
import { useEffect, useState } from 'react'
// import data from './data.json'
import styled from 'styled-components'
import { deviceSize } from '../responsive'
import { Link } from 'react-router-dom'
import { customerData,userSignOut } from '../../api.js'
import profilepicture from '../../images/profilepic.png'

import axios from 'axios'
var BASE_URL = 'https://customerocity.herokuapp.com/api'


// import { customerSearch } from '../../api'
// import { customerData } from '../../api'



const DashboardCard = () => {
    var BASE_URL = 'https://customerocity.herokuapp.com/api'

    const [user, setUser] = useState('')
    const [contactList, setContactList] = useState([])
    const [filterQuery, setFilterQuery] = useState()
    const [meetings, setMeetings] = useState([])
    customerData(setContactList)

    
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
        setMeetings(user.data)
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

    useEffect(() => {
        userView()
        setContactList(contactList)
        getMeetings()
    }, [])

    useEffect(() => {
        console.log(user)
        console.log(meetings)
    }, [user,meetings])
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
                                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <Link onClick = {() => {window.location.assign('/Contacts')}}>
                                    <a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Contacts</span>
                                      
                                    </a>
                                </Link>
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
                                    <a href = "/" onClick={(e) => {
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
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
                                </a>
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
                <div className="h-full ml-16 mt-14 mb-10 md:ml-64">
                    <h3 className="text-3xl font-semibold tracking-wide text-gray-800 mb-6 mt-6 text-left ml-4 dark:border-gray-700 bg-white dark:text-gray-400 dark:bg-gray-800">Welcome Back, <span className ="text-purple-500">{user.givenName}</span> </h3>
                    <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                        <div className="flex flex-col flex-wrap sm:flex-row ">
                            <div className="w-full sm:w-1/2 xl:w-1/3">
                        
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                                    <img alt="user" className="w-32 h-32 rounded-full mx-auto mt-7" src={profilepicture} />
                                    <div className="font-bold text-xl mb-2">Jane Doe</div>
                                    <p className="text-grey-darker text-base">Email, Phone Number</p>
                                    <p className="text-grey-darker text-base mb-4">Designation, Company</p>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Interest 1</span>
                                        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Interest 2</span>
                                        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Interest 3</span>
                                    </div>
                                    <button className="bg-purple-500 hover:bg-blue text-white rounded-full font-semibold hover:text-white py-1 px-3 border border-blue hover:border-transparent ">Schedule Meeting</button>
                                </div>
                      
                            
                            </div>
                            <div className="w-full sm:w-1/2 xl:w-1/3">
                                <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
                                    <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                                        <p className="font-bold text-md p-4 text-black dark:text-white">
                                        My Tasks
                                            <span className="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
                                            (05)
                                            </span>
                                        </p>
                                        <ul>
                                            <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                <div className="flex items-center justify-start text-sm">
                                                    <span className="mx-4">
                                                    01
                                                    </span>
                                                    <span>
                                                    Create wireframe
                                                    </span>
                                                </div>
                                                <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                    <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                    </path>
                                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </li>
                                            <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                <div className="flex items-center justify-start text-sm">
                                                    <span className="mx-4">
                                                    02
                                                    </span>
                                                    <span>
                                                    Dashboard design
                                                    </span>
                                                    <span className="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
                                                    3
                                                        <svg width="15" height="15" fill="currentColor" className="ml-1" viewBox="0 0 512 512">
                                                            <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z" fill="currentColor">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span className="mx-4 flex items-center text-gray-400 dark:text-gray-300">
                                                    3
                                                        <svg width="15" height="15" className="ml-1" fill="currentColor" viewBox="0 0 384 512">
                                                            <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z" fill="currentColor">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                    <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                    </path>
                                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </li>
                                            <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                <div className="flex items-center justify-start text-sm">
                                                    <span className="mx-4">
                                                    03
                                                    </span>
                                                    <span>
                                                    Components card
                                                    </span>
                                                    <span className="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
                                                    3
                                                        <svg width="15" height="15" fill="currentColor" className="ml-1" viewBox="0 0 512 512">
                                                            <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z" fill="currentColor">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                    <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                    </path>
                                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </li>
                                            <li className="flex items-center text-gray-400 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                <div className="flex items-center justify-start text-sm">
                                                    <span className="mx-4">
                                                    04
                                                    </span>
                                                    <span className="line-through">
                                                    Google logo design
                                                    </span>
                                                </div>
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" className="text-green-500 mx-4">
                                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </li>
                                            <li className="flex items-center text-gray-400  justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                <div className="flex items-center justify-start text-sm">
                                                    <span className="mx-4">
                                                    05
                                                    </span>
                                                    <span className="line-through">
                                                    Header navigation
                                                    </span>
                                                </div>
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" className="text-green-500 mx-4">
                                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </li>
                                            <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                <div className="flex items-center justify-start text-sm">
                                                    <span className="mx-4">
                                                    06
                                                    </span>
                                                    <span>
                                                    International
                                                    </span>
                                                    <span className="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
                                                    3
                                                        <svg width="15" height="15" fill="currentColor" className="ml-1" viewBox="0 0 512 512">
                                                            <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z" fill="currentColor">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span className="mx-4 flex items-center text-gray-400 dark:text-gray-300">
                                                    3
                                                        <svg width="15" height="15" className="ml-1" fill="currentColor" viewBox="0 0 384 512">
                                                            <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z" fill="currentColor">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                    <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                    </path>
                                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </li>
                                            <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3">
                                                <div className="flex items-center justify-start text-sm">
                                                    <span className="mx-4">
                                                    07
                                                    </span>
                                                    <span>
                                                    Production data
                                                    </span>
                                                </div>
                                                <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                    <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                    </path>
                                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mb-4 sm:ml-4 xl:mr-4">
                                    <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                                        <div className="flex items-center p-4 justify-between">
                                            <p className="font-bold text-md text-black dark:text-white">
                                            Google
                                            </p>
                                            <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                    <g fill="none">
                                                        <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="py-2 px-4 bg-blue-100 dark:bg-gray-800 text-gray-600 border-l-4 border-blue-500 flex items-center justify-between">
                                            <p className="text-xs flex items-center dark:text-white">
                                                <svg width="20" height="20" fill="currentColor" className="text-blue-500 mr-2" viewBox="0 0 24 24">
                                                    <g fill="none">
                                                        <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            Create wireframe
                                            </p>
                                            <div className="flex items-center">
                                                <span className="font-bold text-xs dark:text-gray-200 mr-2 ml-2 md:ml-4">
                                                25 min 20s
                                                </span>
                                                <button className="text-sm p-1 text-gray-400 border rounded bg-blue-500 mr-4">
                                                    <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                                                        <g fill="none">
                                                            <path d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z" fill="currentColor">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-4 justify-between border-b-2 border-gray-100">
                                            <p className="font-bold text-md text-black dark:text-white">
                                            Slack
                                            </p>
                                            <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                    <g fill="none">
                                                        <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100">
                                            <p className="text-xs flex items-center dark:text-white">
                                                <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                                                    <g fill="none">
                                                        <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            International
                                            </p>
                                            <div className="flex items-center">
                                                <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
                                                30 min
                                                </span>
                                                <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                        <g fill="none">
                                                            <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100">
                                            <p className="text-xs flex items-center dark:text-white">
                                                <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                                                    <g fill="none">
                                                        <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            Slack logo design
                                            </p>
                                            <div className="flex items-center">
                                                <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
                                                30 min
                                                </span>
                                                <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                        <g fill="none">
                                                            <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 text-gray-600 flex items-center justify-between">
                                            <p className="text-xs flex items-center dark:text-white">
                                                <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                                                    <g fill="none">
                                                        <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            Dahboard template
                                            </p>
                                            <div className="flex items-center">
                                                <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
                                                30 min
                                                </span>
                                                <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                        <g fill="none">
                                                            <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 xl:w-1/3">
                                <div className="mb-4">
                                    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700">
                                        <div className="flex flex-wrap overflow-hidden">
                                            <div className="w-full rounded shadow-sm">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="text-left font-bold text-xl text-black dark:text-white">
                                                    Dec 2021
                                                    </div>
                                                    <div className="flex space-x-4">
                                                        <button className="p-2 rounded-full bg-blue-500 text-white">
                                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z">
                                                                </path>
                                                            </svg>
                                                        </button>
                                                        <button className="p-2 rounded-full bg-blue-500 text-white">
                                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z">
                                                                </path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="-mx-2">
                                                    <table className="w-full dark:text-white">
                                                        <tr>
                                                            <th className="py-3 px-2 md:px-3 ">
                                                            S
                                                            </th>
                                                            <th className="py-3 px-2 md:px-3 ">
                                                            M
                                                            </th>
                                                            <th className="py-3 px-2 md:px-3 ">
                                                            T
                                                            </th>
                                                            <th className="py-3 px-2 md:px-3 ">
                                                            W
                                                            </th>
                                                            <th className="py-3 px-2 md:px-3 ">
                                                            T
                                                            </th>
                                                            <th className="py-3 px-2 md:px-3 ">
                                                            F
                                                            </th>
                                                            <th className="py-3 px-2 md:px-3 ">
                                                            S
                                                            </th>
                                                        </tr>
                                                        <tr className="text-gray-400 dark:text-gray-500">
                                                            <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            25
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            26
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            27
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            28
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            29
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            30
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800 cursor-pointer">
                                                            1
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            2
                                                            </td>
                                                            <td className="py-3 relative px-1  hover:text-blue-500 text-center cursor-pointer">
                                                            3
                                                                <span className="absolute rounded-full h-2 w-2 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                                                </span>
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            4
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            5
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            6
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            7
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3 md:px-2 relative lg:px-3 hover:text-blue-500 text-center cursor-pointer">
                                                            8
                                                                <span className="absolute rounded-full h-2 w-2 bg-yellow-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            9
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            10
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            11
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            12
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  text-center text-white cursor-pointer">
                                                                <span className="p-2 rounded-full bg-blue-500">
                                                                13
                                                                </span>
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            14
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            15
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            16
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            17
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            18
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            19
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            20
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            21
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            22
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            23
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            24
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 relative text-center cursor-pointer">
                                                            25
                                                                <span className="absolute rounded-full h-2 w-2 bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                                                </span>
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            26
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            27
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            28
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            29
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            30
                                                            </td>
                                                            <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            31
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                                        <p className="font-bold text-md text-black dark:text-white">
                                        Messages
                                        </p>
                                        <ul>
                                            <li className="flex items-center my-6 space-x-2">
                                                <a href="#" className="block relative">
                                                    <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                                <div className="flex flex-col">
                                                    <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                    Charlie Rabiller
                                                    </span>
                                                    <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                    Hey John ! Do you read the NextJS doc ?
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="flex items-center my-6 space-x-2">
                                                <a href="#" className="block relative">
                                                    <img alt="profil" src="/images/person/5.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                                <div className="flex flex-col">
                                                    <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                    Marie Lou
                                                    </span>
                                                    <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                    No I think the dog is better...
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="flex items-center my-6 space-x-2">
                                                <a href="#" className="block relative">
                                                    <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                                <div className="flex flex-col">
                                                    <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                    Ivan Buck
                                                    </span>
                                                    <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                    Seriously ? haha Bob is not a child !
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="flex items-center my-6 space-x-2">
                                                <a href="#" className="block relative">
                                                    <img alt="profil" src="/images/person/7.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                                <div className="flex flex-col">
                                                    <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                    Marina Farga
                                                    </span>
                                                    <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                    Do you need that design ?
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export const MainButton = styled.button`
  border: none;
  outline: none;
  color: #fff;
  height: 30px;
  width: 190px;
  padding: 6px 3rem;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  background-color: #885AF8;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin-left: 60rem; 
  margin-top: 1.5rem;
  font-family: Monospace;
  &:hover {
    background-color: #885AF8;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-left: -2rem;
  }
`

export default DashboardCard
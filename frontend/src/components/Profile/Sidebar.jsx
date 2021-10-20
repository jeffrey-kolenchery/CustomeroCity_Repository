import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { userView, userSignOut} from '../../api'

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-no-wrap">
                <div style={{minHeight: '810px'}} className="w-96 absolute sm:relative bg-purple-200 shadow md:h-full flex-col justify-between hidden sm:flex">
                    <div className="px-8">
                        <div className="h-16 w-full flex items-center">
                            <span className="text-lg -ml-2 text-purple-800 font-semibold font-mono">CustomeroCity</span>
                        </div>
                        <img src="https://i.imgur.com/CeVfZyY.jpg" className="w-20 h-20 rounded-3xl"/>
                        <div>
                            <div className="p-3 -mt-20 ml-16">
                                <h3 className="text-lg font-mono">Elliot Thombson</h3> 
                                <h4  className="text-sm font-mono">Associate developer</h4>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg>
                                    <Link to="/Account">
                                        <span className="text-sm ml-2 text-black hover:text-pink-600 cursor-pointer font-mono">Account</span>
                                    </Link>
                                    
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-black hover:text-pink-600 cursor-pointer items-center mb-4">
                                <a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                    </svg>
                                    <Link to="/Dashboard">
                                        <span className="text-sm ml-2 text-black hover:text-pink-600 cursor-pointer font-mono">Contacts</span>
                                    </Link>
                                    
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-black hover:text-pink-600 cursor-pointer items-center mb-4">
                                <a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <circle cx={12} cy={12} r={3} />
                                    </svg>
                                    <Link to="/Seetings">
                                        <span className="text-sm ml-2 text-black hover:text-pink-600 cursor-pointer font-mono">Settings</span>
                                    </Link>
                                    
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-black hover:text-pink-600 cursor-pointer items-center mb-4">
                                <a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
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
                    <div className="mt-2 h-16 w-full flex items-center">
                        <span className="text-lg ml-6 text-purple-800 font-semibold font-mono">Recent Contacts</span>
                    </div>
                    <div className="ml-6 w-72 h-28 container flex justify-center bg-purple-600">
                        <img src="https://i.imgur.com/CeVfZyY.jpg" className="w-20 h-20 rounded-3xl mt-3"/>
                        <div>
                            <div className="p-3 mt-2 ml-2">
                                <h3 className="text-md font-mono text-white">Elliot Thombson</h3> 
                                <h4  className="text-xs font-mono text-white">Associate developer</h4>
                                <Link to='#'
                                    onClick={(e) => {
                                        window.location = `${`mailto:hello@gmail.com?subject=${''}&body=${''}`}`
                                    }}>
                                    <h5  className="text-xs font-mono text-white">hello@gmail.com</h5>
                                </Link>
                            </div> 
                        </div>
                    </div>
                    <div className="ml-6 w-72 h-28 container flex justify-center bg-purple-600">
                        <img src="https://i.imgur.com/CeVfZyY.jpg" className="w-20 h-20 rounded-3xl mt-3"/>
                        <div>
                            <div className="p-3 mt-2 ml-2">
                                <h3 className="text-md font-mono text-white">Elliot Thombson</h3> 
                                <h4  className="text-xs font-mono text-white">Associate developer</h4>
                                <Link to='#'
                                    onClick={(e) => {
                                        window.location = `${`mailto:hello@gmail.com?subject=${''}&body=${''}`}`
                                    }}>
                                    <h5  className="text-xs font-mono text-white">hello@gmail.com</h5>
                                </Link>
                            </div> 
                        </div>
                    </div>
                    <div className="ml-6 mb-6 w-72 h-28 container flex justify-center bg-purple-600">
                        <img src="https://i.imgur.com/CeVfZyY.jpg" className="w-20 h-20 rounded-3xl mt-3"/>
                        <div>
                            <div className="p-3 mt-2 ml-2">
                                <h3 className="text-md font-mono text-white">Elliot Thombson</h3> 
                                <h4  className="text-xs font-mono text-white">Associate developer</h4>
                                <Link to='#'
                                    onClick={(e) => {
                                        window.location = `${`mailto:hello@gmail.com?subject=${''}&body=${''}`}`
                                    }}>
                                    <h5  className="text-xs font-mono text-white">hello@gmail.com</h5>
                                </Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Sidebar
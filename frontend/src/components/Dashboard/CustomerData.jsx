import React from 'react'
import { Link } from 'react-router-dom'
import profilepicture from '../../images/profilepic.png'
/* eslint-disable react/prop-types */

const CustomerData = ({
    givenName,
    designation,
    company,
    email,
    profilePicture
}) => {
    return (
        <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img className="object-cover w-full h-full rounded-full" src={profilePicture!='' && profilePicture != undefined ? profilePicture : profilepicture} alt="" loading="lazy" />
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                        <p className="font-semibold">{givenName}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{designation}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-sm">{company}</td>
            <td className="px-4 py-3 text-xs">
                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Active </span>
            </td>
            
            <td className="px-4 py-2 text-sm"><Link to='#'
                onClick={(e) => {
                    window.location = `${`mailto:${email}?subject=${''}&body=${''}`}`
                }}>
                {email}
            </Link></td>
                    
        </tr>
    )
}

export default CustomerData
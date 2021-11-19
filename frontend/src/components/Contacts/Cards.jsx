/* eslint-disable react/prop-types */
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import profilepicture from '../../images/profilepic.png'
const Cards = ({ contactList }) => {

    useEffect(()=>{
        console.log(contactList)
    },[])
    return (
        <>
            {contactList.length != 0 && contactList.map((contact, index) => (

                <figure className="bg-gray-50 text-white h-80 rounded-lg shadow-md" key={index}>
                    <img alt="user" className="w-32 h-32 rounded-full mx-auto mt-7" src={(contact.profilePicture !== '' && contact.profilePicture !== undefined) ? contact.profilePicture : profilepicture} />
                    <figcaption className="text-center mt-5">
                        <Link key={index} to='#'
                            onClick={(e) => {
                                window.sessionStorage.setItem('currentCustomer', contact._id)
                                window.location = 'CustomerProfile'
                            }}>
                            <p className="text-gray-700 font-semibold text-xl mb-2 font-mono text-lg">
                                {contact.givenName}
                            </p>
                        </Link>
                        <p className="text-gray-700 font-mono text-sm">
                            <span className="font-medium">Email: </span>
                            <Link to='#'
                                onClick={(e) => {
                                    window.location = `${`mailto:${contact.email}?subject=${''}&body=${''}`}`
                                }}>
                                {contact.email}
                            </Link>
                        </p>
                        <p className="text-gray-700 font-mono text-sm">
                            <span className="font-medium">Company: </span>{contact.company}
                        </p>
                        <p className="text-gray-700 font-mono text-sm">
                            <span className="font-medium">Role: </span>{contact.designation}
                        </p>

                    </figcaption>
                </figure>
            ))}
        </>
    )
}

export default Cards
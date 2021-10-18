import React from 'react'
import useFetch from 'react-fetch-hook'
import ContactCards from './Cards'
import {useEffect, useState} from 'react'
// import data from './data.json'
import styled from 'styled-components'
import { deviceSize } from '../responsive'
import { Link } from 'react-router-dom'

import axios from 'axios'
var BASE_URL = 'http://localhost:5000/api'


// import { customerSearch } from '../../api'
// import { customerData } from '../../api'



const Contacts = () => {

    async function customerData() {

        let config = {
            headers: {
                'Authorization': `bearer ${window.sessionStorage.getItem('token')}` ,
            }
        }
    
        const endpoint = `${BASE_URL}/customer/customerdata/${window.sessionStorage.getItem('userId')}`
        window.sessionStorage.getItem('token')
        await axios.get(endpoint, config).then(
            (response) => {
                // console.log('Customers returned')
                console.log(response.data)
                // console.log( Object.create(response.data))
    
                return response.data
            },
            (error) => {
                console.log(error)
            }
        )
        // return await axios.get(endpoint)
    
    } 

    // var preformedData = customerData()

    // if (preformedData) {
    //     var data = preformedData

    //     // console.log(datum)
    //     console.log(data)
    // }

    // else {
    //     var message = 'No Customers in the database, why not add some now?'
    // }

    useEffect(() => {
        
    }, [])



    const [contactList, setContactList] = useState()
    const [filterQuery, setFilterQuery] = useState()

    useEffect(() => {
        if (!filterQuery) {
            setContactList(data)
        } else {
            const queryString = filterQuery.toLowerCase()
            const filteredData = data?.filter(contact => {
                const givenName = `${contact.givenName}`

                // if it's just one letter, return all names that start with it
                if (queryString.length === 1) {
                    const firstLetter = givenName.charAt(0).toLowerCase()
                    return firstLetter === queryString
                }
                else {
                    return givenName.toLowerCase().includes(queryString)
                }
            })
            setContactList(filteredData)
        }
    }, [data, filterQuery])

    return (
        <>
            <div className={'bg-gray-100'}>
                <section>
                    <form>
                        <input
                            type={'text'}
                            placeholder={'Search for a contact'}
                            onChange={event => setFilterQuery(event.target.value)}
                            className={'mt-6 rounded-md p-2 w-5/6'}
                        />
                    </form>
                </section>
                <Link to="/AddCustomer">
                    <MainButton>Add Contact</MainButton>
                </Link>
                
                <section className={'grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-20 -mt-14'}>
                    {contactList?.length < 1 && (
                        <h1>No data matches your search</h1>
                    )}
                    {contactList?.length >= 1 && (
                        <ContactCards contactList={contactList}/>
                    )}
                </section>
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

export default Contacts
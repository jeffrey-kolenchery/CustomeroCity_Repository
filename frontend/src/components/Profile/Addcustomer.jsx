/* eslint-disable quotes */
//import { userSignUp } from '../api'
import React , { useState, useEffect}from 'react'
import { useForm } from 'react-hook-form'
import { customerCreate, userSignOut, getBusinessCardDetails } from '../../api'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { storage } from '../../firebase'
import { ref, uploadBytesResumable, getDownloadURL  } from 'firebase/storage'
import { scanBusinessCard } from '../../AzureFormRecognizer/businessCardScanner'




const Addcustomer = () => {
    var BASE_URL = 'https://customerocity.herokuapp.com/api'
    // var BASE_URL = 'http://localhost:5000/api'

    const [user, setUser] = useState('')
    const [formData, setFormData] = useState({
        givenName: "",
        designation: "",
        company: "",
        email: "",
        phoneNo: 0,
        age: "",
        interests: [],
        visitCount: 0,
    })
    const [profileUrl, setProfileUrl] = useState("")
    const [businessUrl, setBusinessUrl] = useState("")
    const [progress, setProgress] = useState(0)
    const [bisProgress, setBisProgress] = useState(0)
    const [customer, setCustomer] = useState("")
    const [bizDetails, setBizDetails] = useState({})

    async function userView() {
        let config = {
            headers: {
                'Authorization': `bearer ${window.sessionStorage.getItem('token')}`
            }
        }
        const endpoint = `${BASE_URL}/user/viewuser/${window.sessionStorage.getItem('userId')}`
        const user = await axios.get(endpoint)
        console.log('USER DATA>>>>>>>>>>')
        setUser(user.data[0])
    }
  
    async function customerCreate() {
        console.log(formData)
        try {
            let config = {
                headers: {
                    'Authorization': `bearer ${window.sessionStorage.getItem('token')}` ,
                }
            }
            const copy = {...formData}
            copy.phoneNo = Number(copy.phoneNo)
            const endpoint = `${BASE_URL}/customer/registercustomer/${window.sessionStorage.getItem('userId')}`
            const customers = await axios.post(endpoint,copy, config)
            setCustomer(customers.data)
            alert('Customer successfully created')
        } catch (err) {
            alert('there was an error :(')
            console.error(err)
        }
    
    }
  
  
    const onChange = (e) => {
        if(e.target.name == "interests1" || e.target.name == "interests2" || e.target.name == "interests3"){
            const copy = {...formData}
            copy.interests.push(e.target.value) 
            setFormData(copy)
        }
        else{
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }
        
    const onSubmit = (e) => {        
        e.preventDefault()
        customerCreate()
    }

    const profileHandler = async (e) => {
        e.preventDefault()
        if(customer == "") alert('please create customer first!')
        const file = e.target[0].files[0]
        handleImageChange(file)
    }
  
    const handleImageChange = (file) => {
  
        if (!file) {return}
        const storageRef = ref(storage, `/images/profilePicture/${customer}+${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
  
        uploadTask.on("state_changed", 
            (snapshot) => {
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setProgress(prog)
            },
            (err) => {
                console.log(err)
            },
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref)
                console.log(url)
                setProfileUrl(url)
            }
        )
  
    }

    const handleBusinessChange = (file) => {
  
        if (!file) {return}
        const storageRef = ref(storage, `/images/businessCard/${customer}+${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
  
        uploadTask.on("state_changed", 
            (snapshot) => {
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setBisProgress(prog)
            },
            (err) => {
                console.log(err)
            },
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref)
                console.log(url)
                setBusinessUrl(url)
            }
        )
  
    }
  
    async function setCustomerProfilePicture(data) {
        try {
            console.log(window.sessionStorage.getItem('token'))
            let config = {
                headers: {
                    'Authorization': `bearer ${window.sessionStorage.getItem('token')}`
                }
            }
            let body = {
                profilePicture : String(data)
            }
            const endpoint = `${BASE_URL}/customer/setProfilePicture/${window.sessionStorage.getItem('userId')}/${customer}`
            const pictureURL = await axios.post(endpoint, body,config)
            console.log(body)
            return pictureURL
        }
        catch(err) {
            console.log(err)
        }
    }
  
    const businessHandler = async (e) => {
        e.preventDefault()
        const file = e.target[0].files[0]
        const url = await handleBusinessChange(file)
        console.log(url)
        setBusinessUrl(url)
        try {
            if (url != '') {
                try {
                    var result = await businessCardHandler(businessUrl)
                    window.sessionStorage.setItem('biz_card',result)
                } catch (error) {
                    console.log(error)
                }
                
            }
            else alert('url not read')
        } catch (error) {
            console.log(error)
            alert('there was an error scanning the business card')
        }
    }
  
    const businessCardHandler = async (url) => {
        const result = await scanBusinessCard(url)
        setBizDetails(result)
        console.log(result)
        return result
    }


    useEffect(() => {
        userView()
    }, [])

    useEffect(() => {
        console.log(user)
        console.log(formData)
        console.log(profileUrl)
        
    }, [user,formData, profileUrl])

    useEffect(()=>{
        if(profileUrl != "") {
            setCustomerProfilePicture(profileUrl)
            alert('Picture Uploaded Successfully')
        }
    },[profileUrl])

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
                <div className="h-full ml-14 mt-40 mb-10 md:ml-96">
                    <div className="flex font-mono h-full bg-white items-center justify-center -mt-24">
                        <div className="grid bg-white border-2 border-purple-200 shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                            <div className="flex justify-center">
                                <div className="flex">
                                    <h1 className="text-gray-600 font-bold md:text-xl text-xl mt-6">Add Customer</h1>
                                </div>
                            </div>
                            <form onSubmit={onSubmit} >
                                <div className="grid grid-cols-1 mt-2 mx-7">
                                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Full Name</label>
                                    <input name = "givenName" className="py-1 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Full Name" onChange={onChange} />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-3 mx-7">
                                    <div className="grid grid-cols-1">
                                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Designation</label>
                                        <input name="designation" className="py-1 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Designation" onChange={onChange} />
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Company</label>
                                        <input name="company" className="py-1 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Company" onChange={onChange}/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-3 mx-7">
                                    <div className="grid grid-cols-1">
                                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Email</label>
                                        <input name="email" className="py-1 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Email" onChange={onChange} />
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Phone Number</label>
                                        <input name="phoneNo" className="py-1 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Phone Number" onChange={onChange}/>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 mt-2 mx-7">
                                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Date Of Birth</label>
                                    <input name="age" type="date"  placeholder="dateofbirth" className="py-1 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" onChange={onChange}/>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-3 mx-7">
                                    <div className="grid grid-cols-1">
                                        <label name="interests" className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Interest 1</label>
                                        <select name="interests1" className="py-1 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" onChange={onChange}>
                                            <option>Option</option>
                                            <option>Sports</option>
                                            <option>Technology</option>
                                            <option>Social Media</option>
                                            <option>Health and Fitness</option>
                                            <option>Photography</option>
                                            <option>Stock Trading</option>
                                            <option>Business and Finance</option>
                                            <option>Writing</option>
                                            <option>Reading</option>
                                            <option>Cooking</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Interest 2</label>
                                        <select name="interests2" className="py-1 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"  onChange={onChange}>
                                            <option>Option</option>
                                            <option>Sports</option>
                                            <option>Technology</option>
                                            <option>Social Media</option>
                                            <option>Health and Fitness</option>
                                            <option>Photography</option>  
                                            <option>Stock Trading</option>
                                            <option>Business and Finance</option>
                                            <option>Writing</option>
                                            <option>Reading</option>
                                            <option>Cooking</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Interest 3</label>
                                        <select name="interests3"className="py-1 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"  onChange={onChange}>
                                            <option>Option</option>
                                            <option>Sports</option>
                                            <option>Technology</option>
                                            <option>Social Media</option>
                                            <option>Health and Fitness</option>
                                            <option>Photography</option>
                                            <option>Stock Trading</option>
                                            <option>Business and Finance</option>
                                            <option>Writing</option>
                                            <option>Reading</option>
                                            <option>Cooking</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                                    <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
                                    <button type="submit" className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Create</button>
                                </div>
                            </form>
                            <form className = 'mb-4' onSubmit={profileHandler}>
                                <input type='file'/>
                                <button type="submit" className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-2 py-1 mb-4'>Upload Profile Picture</button>
                                <h3>uploaded: {progress}%</h3>
                            </form>

                            <form className = 'mb-4 'onSubmit={businessHandler}>
                                <input type='file'/>
                                <button type="submit" className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-1 mb-4'>Upload Business Card</button>
                                <h3>uploaded: {bisProgress}%</h3>
                            </form>

                            <h2 className = 'flex items-center justify-center align-center text-center md:text-sm text-xs text-gray-500 text-light font-semibold'>Create a new Customer and then set a profile picture. You can also fill some fields by scanning customer&#39;s business card instead of typing it out yourself. Note: As this feature is still in development it may be buggy, sometimes you may need to click the upload businessCard button 2-3 times before it appears and that may appear to be inaccurate as well.</h2>
                            
                            <section className="mt-4 border rounded-xl bg-gray-50 mb-2">
                                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Business Card Info</label>
                                <textarea name="bizcard" className="w-full bg-gray-50 p-2 rounded-xl" id = "Credentials" rows="6">{bizDetails}</textarea>
                            </section>
                        </div>
      
                    </div>
        
                </div>
            </div>
        </>
    )
}


export default Addcustomer
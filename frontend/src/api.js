/* eslint-disable no-unused-vars */
import axios from 'axios'
// import * as nodemailer from 'nodemailer'
// import * as sendgridTransport from 'nodemailer-sendgrid-transport'
import * as dotenv from 'dotenv'
import { scanBusinessCard } from './AzureFormRecognizer/businessCardScanner'


var BASE_URL = 'http://localhost:5000/api'
// var BASE_URL = 'https://customerocity.herokuapp.com/api'
dotenv.config()


async function userLogin(data) {
    const endpoint = `${BASE_URL}/user/login`
    return await axios.patch(endpoint, data).then(
        (response) => {
            console.log('user logged in')
            console.log(response)
            window.sessionStorage.setItem('userId',response.data.userId)
            window.sessionStorage.setItem('token',response.data.token)
            console.log(response.data.token)
            
            window.location.assign('/Dashboard')
        },
        (error) => {
            console.log(error)
            alert('enter valid username and password')
        }
    )
}

async function userSignUp(data) {
    const endpoint = `${BASE_URL}/user/register`
    return await axios.post(endpoint, data).then(
        (response) => {
            console.log('user signed up')
            console.log(response)
            var loginData = {
                username : data.email,
                password : data.password
            }
            userLogin(loginData)
        },
        (error) => {
            console.log(error)
            alert('enter valid data in fields')
        }
    )
}

async function userSignOut() {
    const endpoint = `${BASE_URL}/user/signout`
    return await axios.get(endpoint).then(
        (response) => {
            console.log('user signed out')
            console.log(response)
        },
        (error) => {
            console.log(error)
        }
    )
}

async function userResetPassword(data) {
    const endpoint = `${BASE_URL}/user/resetpassword`
    return await axios.post(endpoint, data).then(
        (response) => {
            console.log('reset password link sent to user')
            console.log(response)
        },
        (error) => {
            console.log(error)
            alert('email doesnt exist in server')
        }
    )
}

async function userNewPassword(data) {
    const endpoint = `${BASE_URL}/user/newpassword`
    return await axios.post(endpoint, data).then(
        (response) => {
            console.log('Password successfully rest')
            console.log(response)
        },
        (error) => {
            console.log(error)
            alert('Password has not been rest')
        }
    )
}

async function customerCreate(data) {
    try {
        let config = {
            headers: {
                'Authorization': `bearer ${window.sessionStorage.getItem('token')}` ,
            }
        }

        const endpoint = `${BASE_URL}/customer/registercustomer/${window.sessionStorage.getItem('userId')}`
        window.sessionStorage.getItem('token')
        const customers = await axios.post(endpoint,data, config).then(
            (response) => {
                window.sessionStorage.setItem('currentCustomer',response.data)
            }
        )
        console.log(customers)
        console.log('Customer successfully created')
    } catch (err) {
        console.error(err)
        alert('Enter all required fields with valid data')
    }

}

async function customerDelete(data) {
    console.log('ASDFASDF')
    const endpoint = `${BASE_URL}/customer/deletecustomer/${window.sessionStorage.getItem('userId')}/${window.sessionStorage.getItem('currentCustomer')}`
    console.log(endpoint)
    return await axios.delete(endpoint, data).then(
        (response) => {
            console.log('Customer successfully deleted')
            alert('Customer successfully deleted')
            window.location.assign('/contacts')
            console.log(response)
        },
        (error) => {
            console.log(error)
            // alert('Customer does not exist in database')
        }
    )
}

//data = searchText
async function customerSearch(data) {
    const endpoint = `${BASE_URL}/customer/searchcustomers/${window.sessionStorage.getItem('userId')}`
    return await axios.get(endpoint, data).then(
        (response) => {
            console.log('Customer search returned')
            console.log(response)
        },
        (error) => {
            console.log(error)
        }
    )
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
    console.log(user.data)
}

async function customerReturn() {
    try {
        let config = {
            headers: {
                'Authorization': `bearer ${window.sessionStorage.getItem('token')}`
            }
        }

        const endpoint = `${BASE_URL}/customer/returncustomer/${window.sessionStorage.getItem('userId')}/${window.sessionStorage.getItem('currentCustomer')}`
        return await axios.get(endpoint, config).then((customer) => {
            return customer.data
        })
    } catch (err) {
        console.log(err)
    }
}

async function customerData(setContactList) {

    try {
        let config = {
            headers: {
                'Authorization': `bearer ${window.sessionStorage.getItem('token')}` ,
            }
        }

        const endpoint = `${BASE_URL}/customer/customerdata/${window.sessionStorage.getItem('userId')}`
        window.sessionStorage.getItem('token')
        const customers = await axios.get(endpoint, config)
        // console.log(customers)
        setContactList(customers.data)
    } catch (err) {
        console.error(err)
    }

}

async function setCustomerProfilePicture(data) {
    try {
        let config = {
            body: {
                'profilePicture' : String(data)
            },
            headers: {
                'Authorization': `bearer ${window.sessionStorage.getItem('token')}` ,
            }
        }
        const endpoint = `${BASE_URL}/customer/setProfilePicture/${window.sessionStorage.getItem('userId')}/${window.sessionStorage.getItem('currentCustomer')}`
        const pictureURL = await axios.get(endpoint,config)
        console.log(config.body.profilePicture)
        return pictureURL
    }
    catch(err) {
        console.log(err)
    }
}


async function getCustomerProfilePicture() {
    try {
        let config = {
            headers: {
                'Authorization': `bearer ${window.sessionStorage.getItem('token')}` ,
            }
        }
        const endpoint = `${BASE_URL}/customer/getProfilePicture/${window.sessionStorage.getItem('userId')}/${window.sessionStorage.getItem('currentCustomer')}`
        const pictureURL = await axios.get(endpoint,config)
        return pictureURL
    }
    catch(err) {
        console.log(err)
    }
}

async function getBusinessCardDetails(url) {
    try {
        var details = ''
        await scanBusinessCard(url).then(
            (response) => {
                details = response
            }
        )
        return details
    }
    catch(err) {
        console.log(err)
    }
}

// async function customerEmail(data) {
//     const endpoint = `${BASE_URL}/customer/returncustomers/${window.sessionStorage.getItem('userId')}`
//     return await axios.get(endpoint, data).then(
//         (response) => {
//             console.log('Customer email returned')
//             console.log(response.email)
//         },
//         (error) => {
//             console.log(error)
//         }
//     ) 
// }

// async function customerEmail(data) {
//     transporter.sendMail({
//         from: data.fromEmail,
//         to: data.toEmail,
//         subject: data.subject,
//         body: data.body
//     })
//     return alert('email sent')
// }

// const transporter = nodemailer.createTransport(
//     sendgridTransport({
//         auth: {
//             api_key: process.env.SENDGRID_API_KEY,
//         },
//     })
// )

function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#039;'
    }
    
    return text.replace(/[&<>"']/g, function(m) { return map[m] })
}


export {
    userLogin,
    userSignUp,
    userSignOut,
    userResetPassword,
    userNewPassword,
    userView,
    customerCreate,
    customerDelete,
    customerSearch,
    customerReturn,
    customerData,
    getBusinessCardDetails,
    setCustomerProfilePicture,
    getCustomerProfilePicture,
    // customerEmail,
    escapeHtml
}
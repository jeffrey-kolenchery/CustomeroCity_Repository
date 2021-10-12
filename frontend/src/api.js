import axios from 'axios'
// import history from "./history"

var BASE_URL = 'http://localhost:5000/api'
//var BASE_URL = 'https://customerocity.herokuapp.com/api'


async function userLogin(username, password) {
    const endpoint = `${BASE_URL}/user/login`
    return await axios.patch(endpoint, {username, password}).then(
        // eslint-disable-next-line no-unused-vars
        (response) => {
            console.log('user logged in')
            console.log(response)
            window.sessionStorage.setItem('userId',response.data.userId)
            // window.location.assign('/')
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
    const endpoint = `${BASE_URL}/customer/registercustomer/${window.sessionStorage.getItem('userId')}`
    return await axios.post(endpoint, data).then(
        (response) => {
            console.log('Customer successfully created')
            console.log(response)
        },
        (error) => {
            console.log(error)
            alert('Enter all required fields with valid data')
        }
    )
}

async function customerDelete(data) {
    const endpoint = `${BASE_URL}/customer/deletecustomer/${window.sessionStorage.getItem('userId')}`
    return await axios.post(endpoint, data).then(
        (response) => {
            console.log('Customer successfully deleted')
            console.log(response)
        },
        (error) => {
            console.log(error)
            alert('Customer does not exist in database')
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

async function customerReturn(data) {
    const endpoint = `${BASE_URL}/customer/returncustomers/${window.sessionStorage.getItem('userId')}`
    return await axios.get(endpoint, data).then(
        (response) => {
            console.log('Customer returned')
            console.log(response)
        },
        (error) => {
            console.log(error)
        }
    )
}


export {
    userLogin,
    userSignUp,
    userSignOut,
    userResetPassword,
    userNewPassword,
    customerCreate,
    customerDelete,
    customerSearch,
    customerReturn
}
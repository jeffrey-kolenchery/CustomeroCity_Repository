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
            window.location.assign('/')
        },
        (error) => {
            console.log(error)
            alert('enter valid username and password')
        }
    )
}

async function userSignUp(data) {
    console.log(data)
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

export {
    userLogin,
    userSignUp
}
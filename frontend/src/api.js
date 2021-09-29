import axios from 'axios'
// import history from "./history"

var BASE_URL = 'https://customerocity.herokuapp.com/api'

async function userLogin(username, password) {
    const endpoint = `${BASE_URL}/user/login`
    return await axios.patch(endpoint, {username, password}).then(
        // eslint-disable-next-line no-unused-vars
        (response) => {
            console.log('user logged in')
        },
        (error) => {
            console.log(error)
            alert('enter valid username and password')
        }
    )
}

export {
    userLogin
}
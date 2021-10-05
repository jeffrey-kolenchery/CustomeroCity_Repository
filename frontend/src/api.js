import axios from "axios"
// import history from "./history"

var BASE_URL = "http://localhost:5000/api"

function userLogin(username, password) {
    const endpoint = `${BASE_URL}/login`
    return axios.patch(endpoint, {username, password}).then(
        (response) => {
            console.log(response)
        },
        (error) => {
            alert("enter valid username and password")
            console.log(error)
        }
    )
}

export {
    userLogin
}
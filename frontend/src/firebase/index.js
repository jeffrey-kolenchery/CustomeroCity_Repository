// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCzoUYxg3TnZD_tckCGNhMKcNoE12EvUB8',
    authDomain: 'customerocity.firebaseapp.com',
    projectId: 'customerocity',
    storageBucket: 'customerocity.appspot.com',
    messagingSenderId: '464156881019',
    appId: '1:464156881019:web:39cb86e4d69b2d54adf2de'
}

// Initialize Firebase
const fireBaseApp = firebase.initializeApp(firebaseConfig)

const storage = getStorage(fireBaseApp)
// const storage = getStorage()


export {storage}
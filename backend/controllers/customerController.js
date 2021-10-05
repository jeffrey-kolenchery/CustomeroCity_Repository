/* eslint-disable no-unused-vars */
// const Customer = require("../models/customerModel");
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { Customer } from '../models/customerModel.js'

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const searchCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({ user: req.profile._id })
        res.send(customers)
    } catch (err) {
        res.error(400)
    }
}

const registerCustomer = (req, res, next) => {
    const customer = new Customer({
        givenName: req.body.givenName,
        designation: req.body.designation,
        company: req.body.comapany,
        email: req.body.email,
        age: req.body.age,
        phoneNo: req.body.phoneNo,
        interests: req.body.interests,
        user: req.profile._id,
    })
    customer
        .save()
        .then((customer) => {
            res.status(200).send('Customer Added Successfully!')
        })
        .catch((error) => {
            res.status(400).send('An error occured!')
        })
}

const deleteCustomer = (req, res, next) => {
    const customerName = req.body.givenName
    const { email } = req.body

    try {
        Customer.remove({
            givenName: customerName,
            email,
        })
        res.status(200).send('customer deleted successfully')
    } catch (error) {
        res.status(404).send('customer does not exist in database')
    }
}
//     var username = req.body.username;
//     var password = req.body.password;

//     User.findOne({$or: [{email:username}, {phone: username}]})
//     .then(user => {
//         if(user){
//             bcrypt.compare(password, user.password, function(err, result) {
//                 if(err) {
//                     res.json({
//                         error: err
//                     })
//                 }
//                 if(result) {
//                     let token = jwt.sign({name: user.name}, 'verysecretValue', {expiresIn: '1hr'})
//                     res.json({
//                         message: 'Login Successful!',
//                         token
//                     })
//                 }else {
//                     res.json({
//                         message: 'Password does not match!',
//                     })
//                 }
//             })
//         } else{
//             res.json({
//                 message: 'No user found'
//             })
//         }
//     })
// };

export { registerCustomer, deleteCustomer, searchCustomers }

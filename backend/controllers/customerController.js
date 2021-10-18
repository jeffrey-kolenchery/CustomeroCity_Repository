/* eslint-disable no-unused-vars */
// const Customer = require("../models/customerModel");
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { Customer } from '../models/customerModel.js'

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const searchCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({ user: req.params.userId })
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
        visitCount : 0,
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

const editCustomer = (req,res,next) => {
    const customerId = req.body.customerId

    const resultCustomer = Customer.findById(customerId)

    try {

        Customer.findByIdAndUpdate(customerId,
            {
                givenName: req.body.givenName,
                designation: req.body.designation,
                company: req.body.comapany,
                email: req.body.email,
                age: req.body.age,
                phoneNo: req.body.phoneNo,
                interests: req.body.interests,
                visitCount: resultCustomer.visitCount + 1
            },
            function (err, docs) {
                if (err) {
                    console.log(err)
                }
                else {
                    res.send('Updated customer: ', docs)
                }
            })

    }
    catch(e) {
        res.status(404).send('Customer doesnt exist on server')
    }
    
}

export {
    registerCustomer, 
    deleteCustomer, 
    searchCustomers, 
    editCustomer
}

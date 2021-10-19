/* eslint-disable no-unused-vars */
// const Customer = require("../models/customerModel");
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

import { Customer } from '../models/customerModel.js'



const registerCustomer = (req, res, next) => {
    const customer = new Customer({
        givenName: req.body.givenName,
        designation: req.body.designation,
        company: req.body.company,
        email: req.body.email,
        age: req.body.age,
        phoneNo: req.body.phone,
        interests: req.body.interests,
        user: req.params.userId,
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

const returnCustomer = async (req, res) => {
    try {
        const customer = await Customer.find({ _id : new mongoose.Types.ObjectId(req.body.customerId)})
        res.send(customer)
    } catch (err) {
        res.error(400)
    }
}

const searchCustomers = async (req,res) => {
    try {
        const customers = await Customer.aggregate(
            [
                {
                    '$search': 
                    {
                        'index': 'Customer Search', 
                        'text': 
                            {
                                'query': req.body.searchText, 
                                'path': 'givenName'
                            }
                    }
                }, 
                {
                    '$project': 
                    {
                        '_id': 1,
                        'givenName': 1, 
                        'email': 1, 
                        'company': 1,
                        'designation' : 1, 
                        'user': 1,
                    }
                }, 
                {
                    '$match': 
                    {
                        // 'user': req.params.userId
                        'user': new mongoose.Types.ObjectId(req.params.userId)

                    }
                }
            ]
        )
        if (customers) {
            res.json(customers).status(200)
        }
        else res.status(404).send('No customers found')
    }
    catch (err) {
        res.error(400)
    }
}

const customerData = async (req, res) => {
    // const userID = req.params.userId
    // console.log(userID)
    try {
        const customers = await Customer.aggregate(
            [
                {
                    '$match': {
                        'user':  new mongoose.Types.ObjectId(req.params.userId)
                    }
                }, {
                    '$project': {
                        'givenName': 1, 
                        'email': 1, 
                        'company': 1, 
                        'designation': 1, 
                        '_id': 1
                    }
                }
            ]
        )
        if (customers) {
            res.status(200).json(customers)
        }
    }
    catch(error) {
        res.send('No customers exist. Add some customers!').status(404)
    }
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
    returnCustomer, 
    searchCustomers, 
    editCustomer,
    customerData
}

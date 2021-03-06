/* eslint-disable no-unused-vars */
// const Customer = require("../models/customerModel");
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

import { Customer } from '../models/customerModel.js'

const getCustomers = async (req,res) => {
    try {
        console.log(req.params.userId)
        const customer = await Customer.find({user: req.params.userId })
        res.send(customer)
    } catch (err) {
        console.error(err)
    }
}

const registerCustomer = (req, res, next) => {
    console.log(req.auth)
    const customer = new Customer({
        givenName: req.body.givenName,
        designation: req.body.designation,
        company: req.body.company,
        email: req.body.email,
        age: req.body.age,
        phoneNo: req.body.phoneNo,
        interests: req.body.interests,
        user: req.params.userId,
        visitCount : 0,
    })
    customer
        .save()
        .then((customer) => {
            res.status(200).send(customer._id)
        })
        .catch((error) => {
            console.log(error)
            res.status(400).send(error)
        })
}

const returnCustomer = async (req, res) => {
    try {
        console.log(req.body.customerId)
        const customer = await Customer.find({ _id : new mongoose.Types.ObjectId(req.params.customerId)})
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
        res.status(400)
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
                        'phoneNo':1, 
                        'profilePicture':1,
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

    try {
        Customer.findByIdAndDelete(req.params.customerId, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log('Deleted : ', docs)
            }
        })
        res.status(200).send('customer deleted successfully')
    } catch (error) {
        res.status(404).send('customer does not exist in database')
    }
}

const editCustomer = (req,res,next) => {
    console.log('asdfasdfasdfasdf')
    const customerId = req.body._id
    console.log('asdfasdfasdfasdf')
    try {

        Customer.findByIdAndUpdate(customerId,
            {
                givenName: req.body.givenName,
                designation: req.body.designation,
                company: req.body.company,
                email: req.body.email,
                age: req.body.age,
                phoneNo: req.body.phoneNo,
                interests: req.body.interests,
            },
            function (err, docs) {
                if (err) {
                    console.log('ASDFASDF')
                    console.log(err)
                }
                else {
                    res.send(docs)
                }
            })

    }
    catch(e) {
        res.status(404).send('Customer doesnt exist on server')
    }
    
}

const addProfilePicture = async (req,res,next) => {
    try {
        const customer = await Customer.findByIdAndUpdate(new mongoose.Types.ObjectId(req.params.customerId), {
            profilePicture : req.body.profilePicture
        })
    }
    catch(e) {
        res.status(404).send('Customer doesnt exist on server')
    }
}

const getProfilePicture = (req,res,next) => {
    var picture = ''
    try {
        const customer = Customer.findById(new mongoose.Types.ObjectId(req.params.customerId))
        picture = customer.profilePicture
    }
    catch(e) {
        res.status(404).send('Customer doesnt exist on server')
    }
}

const addBusinessCard = (req,res,next) => {
    try {
        Customer.findByIdAndUpdate(new mongoose.Types.ObjectId(req.params.customerId), {
            profilePicture : req.body.profilePicture
        })
    }
    catch(e) {
        res.status(404).send('Customer doesnt exist on server')
    }
}

//const scan business card
//const send back profile pic


export {
    registerCustomer, 
    deleteCustomer,
    returnCustomer, 
    searchCustomers,
    getCustomers, 
    editCustomer,
    customerData,
    addProfilePicture,
    getProfilePicture,
    addBusinessCard
}

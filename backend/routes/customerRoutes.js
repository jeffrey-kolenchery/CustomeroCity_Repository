/* eslint-disable no-unused-vars */
import * as express from 'express'
import * as CustomerController from '../controllers/customerController.js'
import { findUserById } from '../controllers/userController.js'
import { isAuth, requireSignin } from '../controllers/authController.js'
// import {
//     findCalendarById,
//     createCalendar,
// } from '../controllers/calendarController.js'
// import { createMeeting } from '../controllers/meetingController.js'

const customerRouter = express.Router()

// Calls callback function every time "userId" is in the parameter.
// E.g. if /secret/6128965fd267fe25743bfec2 is called,
// Because: /secret/:userId this route is getting called,
// the callback function findUserById is being called.

customerRouter.param('userId', findUserById)
// customerRouter.param('userId', findCalendarById) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Sending a request to create a customer for :userId will require the request
// to include an authorization token where the decrypted userId matches the
// userId in the params.
// When registering a customer for :userId, we make sure that the person sending
// the request is logged in by that same userId.

customerRouter.post(
    '/registercustomer/:userId',
    requireSignin,
    isAuth,
    CustomerController.registerCustomer
)
customerRouter.delete(
    '/deletecustomer/:userId/:customerId',
    // requireSignin,
    // isAuth,
    CustomerController.deleteCustomer
)
customerRouter.get(
    '/searchcustomers/:userId',
    CustomerController.searchCustomers
)

customerRouter.get(
    '/returncustomer/:userId/:customerId',
    requireSignin,
    isAuth,
    CustomerController.returnCustomer
)

customerRouter.patch(
    '/updatecustomer/:userId/:customerId',
    requireSignin,
    isAuth,
    CustomerController.editCustomer
)

customerRouter.get(
    '/customerdata/:userId',
    requireSignin,
    isAuth,
    CustomerController.customerData
)

customerRouter.get(
    '/getCustomers/:userId',
    requireSignin,
    isAuth,
    CustomerController.getCustomers
)

customerRouter.post(
    '/setProfilePicture/:userId/:customerId',
    requireSignin,
    CustomerController.addProfilePicture
)

customerRouter.get(
    '/getProfilePicture/:userId/:customerId',
    requireSignin,
    isAuth,
    CustomerController.getProfilePicture
)

customerRouter.get(
    '/setBusinessCard/:userId/:customerId',
    requireSignin,
    isAuth,
    CustomerController.addBusinessCard
)
customerRouter.get(
    '/getCustomers/:userId',
    requireSignin,
    isAuth,
    CustomerController.getCustomers
)
customerRouter.get(
    '/getCustomers/:userId',
    requireSignin,
    isAuth,
    CustomerController.getCustomers
)


// module.exports = customerRouter;
export { customerRouter }

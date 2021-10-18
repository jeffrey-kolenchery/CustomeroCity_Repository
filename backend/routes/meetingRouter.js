/* eslint-disable no-unused-vars */
import express from 'express'
const meetingRouter = express.Router()

import { findUserById } from '../controllers/userController.js'
import { isAuth, requireSignin } from '../controllers/authController.js'
import {
    findCalendarById,
    createCalendar,
} from '../controllers/calendarController.js'
import {
    createMeeting,
    getAllMeetings,
    getMeetingsByCustomer,
} from '../controllers/meetingController.js'

// Calls callback function every time "userId" is in the parameter.
// E.g. if /secret/6128965fd267fe25743bfec2 is called,
// Because: /secret/:userId this route is getting called,
// the callback function findUserById is being called.
meetingRouter.param('userId', findUserById)
meetingRouter.param('userId', findCalendarById)

// Sending a request to create a customer for :userId will require the request
// to include an authorization token where the decrypted userId matches the
// userId in the params.
// When registering a customer for :userId, we make sure that the person sending
// the request is logged in by that same userId.
meetingRouter.post(
    '/createMeeting/:userId/:customerId',
    requireSignin,
    isAuth,
    createMeeting
)

meetingRouter.get(
    '/getMeetings/:userId',
    requireSignin,
    isAuth,
    getAllMeetings
)
meetingRouter.get(
    '/getMeetings/:userId/:customerId',
    requireSignin,
    isAuth,
    getMeetingsByCustomer
)

export { meetingRouter }

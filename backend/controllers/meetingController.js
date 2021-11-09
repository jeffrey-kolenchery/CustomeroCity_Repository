import { Customer } from '../models/customerModel.js'
import { Meeting } from '../models/meetingModel.js'

const createMeeting = async (req, res, next) => {
    // Get time.
    const doo = new Date(`${req.body.year}-${req.body.month}-${req.body.day}`)
    const date = new Date(
        doo.getTime() + Math.abs(doo.getTimezoneOffset() * 60000)
    )
    // Create new meeting.
    let meeting = new Meeting({
        loc: req.body.location,
        calendar: req.calendar,
        date: date,
        user: req.profile._id,
        customer: req.params.customerId,
    })

    // Save to database.
    try {
        const meet = await meeting.save()
        res.send(meet)
    } catch (err) {
        console.log(err)
    }
}

const getAllMeetings = async (req, res) => {
    try {
      
        const meetings = await Meeting.find({ user: req.profile._id })
        console.log("meeingsa")
        console.log(meetings)
        res.send(meetings)
    } catch (err) {
        console.error(err)
    }
}

const getMeetingsByCustomer = async (req, res) => {
    try {
        const meetings = await Meeting.find({
            user: req.profile._id,
            customer: req.params.customerId,
        })
        res.send(meetings)
    } catch (err) {
        console.log(err)
    }
}

const updateMeetings =  async (req,res) => {
    let eventData = []
    let meetings = await Meeting.find()
    try {
        if (req.body.action === 'insert' || (req.body.action === 'batch' && req.body.added.length > 0)) {
            (req.body.action === 'insert') ? eventData.push(req.body.value) : eventData = req.body.added
            for (var a = 0; a < eventData.length; a++) {
                const customer = await Customer.findOne({email: eventData[a].customer})
                eventData[a].Subject = customer.givenName
                eventData[a].StartTime = new Date(eventData[a].StartTime)
                eventData[a].EndTime = new Date(eventData[a].EndTime)
                eventData[a].user = req.profile._id
                eventData[a].customer = customer._id
                eventData[a].Id = meetings.length
                console.log(eventData[a])
                const newMeeting = new Meeting (eventData[a])
                newMeeting.save()
            }
        }
        if (req.body.action === 'update' || (req.body.action === 'batch' && req.body.changed.length > 0)) {
            (req.body.action === 'update') ? eventData.push(req.body.value) : eventData = req.body.changed
            for (var b = 0; b < eventData.length; b++) {
                delete eventData[b]._id
                eventData[b].StartTime = new Date(eventData[b].StartTime)
                eventData[b].EndTime = new Date(eventData[b].EndTime)
                await Meeting.findOneAndUpdate({Id: eventData[b].Id},{ $set: eventData[b] })
            }
        }
        if (req.body.action === 'remove' || (req.body.action === 'batch' && req.body.deleted.length > 0)) {
            (req.body.action === 'remove') ? eventData.push({ Id: req.body.key }) : eventData = req.body.deleted
            for (var c = 0; c < eventData.length; c++) {
                await Meeting.findOneAndDelete({Id: eventData[c].Id})
            }
        }
        res.send(req.body)
    } catch (err) {
        console.error(err)
    }
}


export { createMeeting, getAllMeetings, getMeetingsByCustomer, updateMeetings }

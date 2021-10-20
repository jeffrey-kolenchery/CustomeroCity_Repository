/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import './Test.css'
import axios from 'axios'

const Calendar = () => {

    const [customers, setCustomers] = useState([])
    const [userId, setUserId] = useState('')

    const findAllCustomers = async (userId) => {
        let config = {
            headers: {
                'Authorization': `bearer ${window.sessionStorage.getItem('token')}`,
            }
        }
        const customers = await axios.get(`https://customerocity.herokuapp.com/api/customer/getCustomers/${userId}`, config)
        if (length(customers.data)>0) {
            let array = customers.data
            console.log(array)
            let nameArray = array.map(data => data.email)
            // console.log('asdfasdfasdfasdf', customers)
            setCustomers(nameArray)
        }
        
    }

    useEffect(() => {
        if (window.sessionStorage.getItem('userId')) {
            findAllCustomers(window.sessionStorage.getItem('userId'))
            setUserId(window.sessionStorage.getItem('userId'))
        }
        else {
            window.alert('Login to access this')
        }
    }, [])

    useEffect(() => {
        console.log('customerscustoermss', customers)
    }, [customers])

    const scheduleComponent = new ScheduleComponent({})
    const dataManager = new DataManager({
        url: `https://customerocity.herokuapp.com/api/meeting/GetData/${userId}`,
        crudUrl: `https://customerocity.herokuapp.com/api/api/meeting/BatchData/${userId}`,
        adaptor: new UrlAdaptor(),
        crossDomain: true
    })

    const editorTemplate = (props) => {

        return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%' }}><tbody>
            <tr><td className="e-textlabel">Title</td><td colSpan={4}>
                <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
            </td></tr>
            <tr><td className="e-textlabel">Location</td><td colSpan={4}>
                <input id="Location" className="e-field e-input" type="text" name="loc" style={{ width: '100%' }} />
            </td></tr>
            <tr><td className="e-textlabel">Customer Email</td><td colSpan={4}>
                <DropDownListComponent id="EventType" placeholder='Choose Customer' data-name="customer" className="e-field" style={{ width: '100%' }} dataSource={customers} value={props.EventType || null}></DropDownListComponent>
            </td></tr>
            <tr><td className="e-textlabel">From</td><td colSpan={4}>
                <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
            </td></tr>
            <tr><td className="e-textlabel">To</td><td colSpan={4}>
                <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
            </td></tr>
            <tr><td className="e-textlabel">Description</td><td colSpan={4}>
                <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
            </td></tr> </tbody></table> : <div></div>)
    }

    return (
        <div className="control-section">
            <div className="schedule-control">
                <ScheduleComponent id="schedule" ref={scheduleComponent} height="550px"
                    selectedDate={new Date()} currentView="Month" eventSettings={{ dataSource: dataManager }} showQuickInfo={false} editorTemplate={editorTemplate}>
                    <ViewsDirective>
                        <ViewDirective option="Day" />
                        <ViewDirective option="Week" />
                        <ViewDirective option="WorkWeek" />
                        <ViewDirective option="Month" />
                        <ViewDirective option="Agenda" />
                    </ViewsDirective>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda,]} />
                </ScheduleComponent>
            </div>
        </div>
    )
}

export default Calendar

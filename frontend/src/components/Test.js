/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react'

import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import './Test.css'

const Test = () => {

    const [customers, setCustomers] = useState([])

    const scheduleComponent = new ScheduleComponent({})
    const dataManager = new DataManager({
        url: 'http://localhost:5000/GetData',
        crudUrl: 'http://localhost:5000/BatchData',
        adaptor: new UrlAdaptor(),
        crossDomain: true
    })

    const editorTemplate = (props) => {

        return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%' }}><tbody>
            <tr><td className="e-textlabel">Location</td><td colSpan={4}>
                <input id="Summary" className="e-field e-input" type="text" name="loc" style={{ width: '100%' }} />
            </td></tr>
            <tr><td className="e-textlabel">Status</td><td colSpan={4}>
                <DropDownListComponent id="EventType" placeholder='Choose status' data-name="Customer" className="e-field" style={{ width: '100%' }} dataSource={['Gyu Park', 'Requested', 'Confirmed']} value={props.EventType || null}></DropDownListComponent>
            </td></tr>
            <tr><td className="e-textlabel">From</td><td colSpan={4}>
                <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
            </td></tr>
            <tr><td className="e-textlabel">To</td><td colSpan={4}>
                <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
            </td></tr>
            <tr><td className="e-textlabel">Reason</td><td colSpan={4}>
                <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
            </td></tr> </tbody></table> : <div></div>)
    }

    return (
        <div className="control-section">
            <div className="schedule-control">
                <ScheduleComponent id="schedule" ref={scheduleComponent} height="550px"
                    selectedDate={new Date(2017, 5, 5)} currentView="Month" eventSettings={{ dataSource: dataManager }} showQuickInfo={false} editorTemplate={editorTemplate}>
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

export default Test

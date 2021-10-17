import React, {useEffect} from 'react'

import Scheduler from 'devextreme-react/scheduler'

import { data } from './data.js'

const currentDate = new Date(2021, 2, 28)
const views = ['week', 'month']


const Calendar = () => {

    useEffect(()=>{
        window.addEventListener('load', function () {
            var eles = document.querySelectorAll('.dx-item-content dx-scheduler-appointment-content')
            console.log(eles)
            console.log(eles.length)
            console.log(eles[0])
        })
    },[])



    return (
        <Scheduler
            timeZone="America/Los_Angeles"
            dataSource={data}
            views={views}
            defaultCurrentView="week"
            defaultCurrentDate={currentDate}
            height={600}
            startDayHour={9} 
            descriptionExpr={'ASDF'}/>
            
            
    )
}

export default Calendar

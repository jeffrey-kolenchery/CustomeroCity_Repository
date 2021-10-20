import React from 'react'
import Sidebar from '../Profile/Sidebar'
import Contacts from '../Contacts'
import DashboardCard from './dashboard'
import Calendar from '../Test.jsx'

export function Dashboard() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Calendar />
        </div>
      </div>

    </>
  )
}


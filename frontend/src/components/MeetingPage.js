import React from 'react';
import { SidebarData } from './SidebarData';
import MeetingList from './MeetingList';
import './Dashboard.css';

const MeetingPage = () => {
  return (
    <div>
        <div className="Sidebar">
            <h3>
                CRM Tools
            </h3>
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li 
                            key={key}
                            className="row"
                            id = {window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
        <div className="SidebarContacts">
            <h3>
                Recent Contacts
            </h3>
            <div className="RecentContacts">

            </div>
            <div className="RecentContacts">
                
            </div>
            <div className="RecentContacts">

            </div>
        </div> 
        <div className="DataGrid right">
            <MeetingList />
        </div> 
        
    </div>
  );
}

export default MeetingPage
import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import './UserProfile.css';
const UserProfile = () => {
    const [name, setName] = useState("");
    return (
        <div>
            <div className="Sidebar">
                <h3>
                    CRM Tools
                </h3>
                <div class="btn-group">
                    <button style={{position: "absolute", top: 10 , left: 1040}}>Update/Edit</button>
                    <button style={{position: "absolute", top: 10 , left: 1240}}>Delete</button>
                </div>
               <input type="credentials" className="Data" name="credentials" placeholder = "Credentials" style={{position: "absolute", top: 100 , left: 500}}/>
               <input type="uniqueindentifier" className="Data" name="uniqueindentifier" placeholder = "Unique Indentifier" style={{position: "absolute", top: 100 , left: 1000}}/>
               <input type="3" className="Data" name="3" placeholder = "3" style={{position: "absolute", top: 250 , left: 500}}/>
               <input type="4" className="Data" name="4" placeholder = "4" style={{position: "absolute", top: 250 , left: 1000}}/>
               <input type="5" className="DataBig" name="5" placeholder = "5" style={{position: "absolute", top: 400 , left: 500}}/>
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => {
                        return (
                            <li 
                                key={key}
                                className="row"
                                id = {window.location.pathname == val.link ? "active" : ""}
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
        </div>
    )
};

export default UserProfile;
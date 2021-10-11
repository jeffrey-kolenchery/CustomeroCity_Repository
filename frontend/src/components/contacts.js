import React, { useState } from 'react'
import { SidebarData } from './SidebarData'
import './UserProfile.css'
const Contacts = () => {
    const [name, setName] = useState()
    return (
        <div>
            
            <div className = "split right">
                <div className="topnav" >
                    <a className="active" href="#home">Search Contact</a>
                    
                    <div className="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search.."  name="search"></input>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className="btn-group">
                    <button style={{position: 'absolute', top: 90 , left: 1040}}>Add Contacts</button>
                    
                </div>
                
            </div>
            
            
            
            <div className="Sidebar">
                <h3>
                    CRM Tool
                </h3>
            
                <ul className='SidebarList'>
                    {SidebarData.map((val, key) => {
                        return (
                            <li 
                                key={key}
                                className="row"
                                id = {window.location.pathname == val.link ? 'active' : ''}
                                onClick={() => {
                                    window.location.pathname = val.link
                                }}
                            >
                                <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                            </li>
                        )
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
}
export default Contacts
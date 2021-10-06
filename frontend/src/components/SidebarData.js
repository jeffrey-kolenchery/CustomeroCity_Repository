import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome size={20}/>,
        cName: 'nav-text'
    },
    {
        title: 'Email',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText size={20}/>,
        cName: 'nav-text'
    },
    {
        title: 'Contacts',
        path: '/Contacts',
        icon: <IoIcons.IoIosContact size={25}/>,
        cName: 'nav-text'
    },
    {
        title: 'Chat',
        path: '/Chat',
        icon: <IoIcons.IoMdChatboxes size={25}/>,
        cName: 'nav-text'
    }
]
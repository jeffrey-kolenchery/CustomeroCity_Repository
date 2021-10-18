import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome size={20}/>,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/account',
        icon: <MdIcons.MdOutlineAccountCircle size={20}/>,
        cName: 'nav-text'
    },
    {
        title: 'Customers',
        path: '/Customers',
        icon: <MdIcons.MdSupervisorAccount size={25}/>,
        cName: 'nav-text'
    },
]
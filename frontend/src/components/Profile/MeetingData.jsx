import React from 'react'
/* eslint-disable react/prop-types */

const MeetingData = ({
    Subject,
    loc,
    StartTime,
    EndTime
}) => {
    return (
        <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                    <div>
                        <p className="font-semibold"> {Subject}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-sm">{loc}</td>
            <td className="px-4 py-3 text-sm">
                {StartTime}</td>
            <td className="px-4 py-3 text-sm">{EndTime}</td>
        </tr>
    )
}

export default MeetingData
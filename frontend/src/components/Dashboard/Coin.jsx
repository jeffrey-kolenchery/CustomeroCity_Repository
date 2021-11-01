import React from 'react'
/* eslint-disable react/prop-types */

const Coin = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) => {
    return (
        <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img className="object-cover w-full h-full rounded-full" src={image} alt='crypto' loading="lazy" />
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{symbol}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-sm">${price}</td>
          
            <td className="px-4 py-2 text-sm">
                ${volume.toLocaleString()}
            </td>
            {priceChange < 0 ? (
                <td className="px-4 py-2 text-sm text-red-500">{priceChange.toFixed(2)}%</td>
            ) : (
                <td className="px-4 py-2 text-sm text-green-500">{priceChange.toFixed(2)}%</td>
            )}

            
        </tr>
    )
}

export default Coin
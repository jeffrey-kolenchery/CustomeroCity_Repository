import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';

const Crypto = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      })
      .catch(error => console.log(error));
  }, [])

  const filteredCoins = coins.filter(coin =>
    ["Bitcoin","Ethereum","Tether", "Cardano","Solana","XRP","Binance Coin","Dogecoin"].some(i => coin.name.includes(i))
  );

  return (
    <div className='relative flex flex-col bg-white min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded'>
    <div className="rounded-t mb-0 px-0 border-0">
    <div className="block w-full overflow-x-auto">
    <table className="w-full">
    <thead>
        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
        <th className="px-4 py-3">CryptoCurrency Tracker</th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
      </tbody>
      </table>
    </div>
    </div>
    </div>
  );
}

export default Crypto
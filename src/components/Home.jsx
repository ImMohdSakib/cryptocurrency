import React, { useEffect, useState } from 'react'
import Coin from './Product'
import axios from 'axios'
import Loader from './Loader'

const Home = () => {
 
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{    
    const fetchAllCoins = async() =>{
      try {
        const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=32")
      
      console.log(data); 
      setCoins(data)
      setLoading(false)
        
      } catch (error) {
        // setLoading(false)
        // alert("Not working")
      }
    }
    fetchAllCoins();
  },[])

  return (
    <div className='coins'>
      {
        loading ? <Loader /> : 
        coins.map(i => (
          <Coin name={i.name} symbol={i.symbol} key={i.id} imgSrc = {i.image} price = {i.current_price} rank = {i.market_cap_rank} />
        ))
      }
    </div>
  )
}

export default Home
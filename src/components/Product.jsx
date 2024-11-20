import React from 'react'

const Coin = ({name, symbol, imgSrc, price, rank}) => {
  return (
    <div className='coin'>
      <img src={imgSrc ? imgSrc : <p>Loading...</p>} alt={name} />
        <h1>{symbol ? symbol : <p>Loading...</p>}</h1>
        <p>{name}</p>
        <p><b>Rs.</b> {price}</p>
        <p>Rank {rank}</p>
    </div>
  )
}


export default Coin
import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const CountryInfo = ({ data, details, max }) => {
  return (
    <div className='CountryInfo'>
      <div className='top'>
        <Link to={'/country/' + data.cca3} className='name'>
          {data.name.common}
        </Link>
        <p className='area'>
          {(data.area / Math.pow(10, 6)).toFixed(1)} million km<sup>2</sup>
        </p>
      </div>
      <div className='bar'>
        <div
          className='bar-fill'
          style={{ width: `${(data.area / max) * 100}%` }}
        />
      </div>
      {details && (
        <div className='bottom'>
          <p className='capital'>Capital: {data.capital}</p>
          <p className='region'>Region: {data.subregion}</p>
        </div>
      )}
    </div>
  )
}

export default CountryInfo

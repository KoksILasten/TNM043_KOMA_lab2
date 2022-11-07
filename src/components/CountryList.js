import CountryInfo from './CountryInfo.js'
import countries from 'world-countries'
import React, { useState } from 'react'

function CountryList () {
  countries.sort((a, b) => {
    return b.area - a.area
  })

  const filtredCountries = countries.filter(country => {
    return country.name.common !== 'Antarctica'
  })

  const [searchString, setSearchString] = useState('')

  const consoleReturn = e => {
    setSearchString(e.target.value)
    console.log('You Typed: ' + searchString)
  }

  const matchSearch = country => {
    const lowerCaseWord = country.name.common.toLowerCase()
    const lowerCaseSearch = searchString.toLowerCase()
    return lowerCaseWord.indexOf(lowerCaseSearch) !== -1
  }

  const searchedCountries = filtredCountries.filter(matchSearch)

  return (
    <div>
      <div className='search'>
        <input
          type='text'
          placeholder='type something...'
          onInput={consoleReturn}
        />
      </div>
      <div className='countries'>
        {searchedCountries.slice(0, 5).map(c => {
          return (
            <CountryInfo
              data={c}
              key={c.ccn3}
              max={searchedCountries[0].area}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CountryList

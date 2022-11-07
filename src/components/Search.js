import React, { useState, ReactDOM } from 'react'

function Search ({ countries }) {
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

  const searchedCountries = countries.filter(matchSearch)

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='type something...'
        onInput={consoleReturn}
      />
    </div>
  )
}

export default Search

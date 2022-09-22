import './App.css'
import countries from 'world-countries'
import CountryInfo from './components/CountryInfo.js'

function App () {
  countries.sort((a, b) => {
    return b.area - a.area
  })

  const filtredCountries = countries.filter(country => {
    return country.name.common !== 'Antarctica'
  })

  const consoleReturn = e => {
    console.log('You Typed: ' + e.target.value)
  }

  return (
    <div className='App'>
      <div className='search'>
        <input
          type='text'
          placeholder='type something...'
          onInput={consoleReturn}
        />
      </div>
      <header className='App-header'>
        <div className='left_column'>
          {filtredCountries.slice(0, 5).map(c => {
            return (
              <CountryInfo
                data={c}
                max={filtredCountries[0].area}
                key={c.ccn3}
                details
              />
            )
          })}
        </div>
        <div className='right_column'>
          {filtredCountries.slice(6, 17).map(c => {
            return (
              <CountryInfo
                data={c}
                max={filtredCountries[0].area}
                key={c.ccn3}
                details={false}
              />
            )
          })}
        </div>
      </header>
    </div>
  )
}

export default App

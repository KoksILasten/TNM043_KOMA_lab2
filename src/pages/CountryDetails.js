import { useParams } from 'react-router-dom'
import countries from 'world-countries'
import CountryInfo from '../components/CountryInfo.js'

function getCountryByCca3 (idTag) {
  return countries.find(country => country.cca3 === idTag)
}

function CountryDetails () {
  const params = useParams() // GETTING THE PARAMS FROM THE URL
  const idTag = params.cca3
  const currentCountry = getCountryByCca3(idTag)

  const borders = currentCountry.borders.map(id => getCountryByCca3(id))
  borders.sort((a, b) => b.area - a.area)

  const relevantBorders = [...borders, currentCountry]
  relevantBorders.sort((a, b) => b.area - a.area)

  return (
    <div className='CountryDetails'>
      <CountryInfo
        data={currentCountry}
        details
        max={relevantBorders[0].area}
        key={currentCountry.ccn3}
      />
      <h3>Border Countries: {borders.length}</h3>
      {borders.map(c => (
        <CountryInfo data={c} key={c.ccn3} max={relevantBorders[0].area} />
      ))}
    </div>
  )
}
export default CountryDetails

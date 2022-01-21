import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {

  const [search, setsearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
    
  const filteredCountries = countries.filter(c => c.name.official.toLowerCase().includes(search))
  

  const handleSearch = (f) =>{
    console.log(f.target.value);
    setsearch(f.target.value)
  }

    return (
      <div>
       Find Countries <input value={search} onChange={handleSearch}/>

      <Find filteredCountries={filteredCountries}/>

      </div>
    )
}

const Find  = ({filteredCountries}) => {

  if(filteredCountries.length === 1){
    const country = filteredCountries[0]
    const languages = Object.values(country.languages)


    return (
      <div>
        <h1>
          {country.name.official}
        </h1>
        <p><strong>Capital</strong> {country.capital}</p>
        <p><strong>Population</strong> {country.population}</p>
        <h2>languages</h2>
          <ul>
            {languages.map(lan => <li key={lan}> {lan}</li>)}
          </ul>

        <img src={country.flags.svg} alt={"flag"}  width='15%' />
      </div>
    )
  }

  if (filteredCountries.length > 10 )
  return <div>Too mnny matches,specify another filter</div>
  return filteredCountries.map(country => <div key={country.name.official}>{country.name.official}</div>)
  
}

export default App;

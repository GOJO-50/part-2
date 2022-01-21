import React from "react"

const Find  = ({filteredCountries, setSearchFilter}) => {

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
    return filteredCountries.map(country => 

    <div key={country.name.official}>

    {country.name.official} 
    <button value={country.name.official} onClick={(e) => setSearchFilter(e.target.value)}> Show</button>

    </div>)
    
  }

  export default Find;
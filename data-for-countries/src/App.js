import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Find from './component/find';
const App = () => {

  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
    
  const filteredCountries = countries.filter(c => c.name.official.toLowerCase().includes(search.toLowerCase()))
  

  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }

    return (
      <div>
       Find Countries <input value={search} onChange={handleSearch}/>

      <Find filteredCountries={filteredCountries} setSearchFilter={setSearch}/>

      </div>
    )
}


export default App;

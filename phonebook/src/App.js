import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas'}]) 
  const [newName, setNewName] = useState('')
  
  const addNote = (event) =>{
    event.preventDefault()
    const checkName = persons.filter(person => newName.toUpperCase() === person.name.toUpperCase())

    if (checkName[0] !== undefined){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat({name: newName}))
      setNewName('')
    }
  }

  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

    return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          Name: <input value={newName} onChange={handleName}/>
        </div>
        <div >
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
        <div>
            {persons.map(person => <li key={person.name}>{person.name}</li>)}
        </div>
    </div>
  )
}

export default App
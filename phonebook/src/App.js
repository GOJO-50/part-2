import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: 123, id: 1}]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)
 
  const addNote = (event) =>{
    event.preventDefault()
    const checkName = persons.filter(person => newName.toUpperCase() === person.name.toUpperCase())
    const checkNumber = persons.filter(persona => newNumber === persona.number)

   
    if (checkName[0] !== undefined){
      alert(`${newName} is already added to phonebook`)
    } 
    else if(checkNumber[0] !== undefined){
      alert(`${newNumber} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumber= (event)=>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }     

     return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          Name: <input value={newName} onChange={handleName}/>
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumber}/>
        </div>
        <div >
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
        <div>
            {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
        </div>
    </div>
  )
}

export default App
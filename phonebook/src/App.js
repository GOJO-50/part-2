import React, { useState, useEffect } from 'react'
import Person from './Components/Persons'
import PersonForm from './Components/PersonForm'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)

  useEffect(()=>{
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  
  
  const addNote = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }  
      
    const checkName = persons.filter(person => newName.toUpperCase() === person.name.toUpperCase())
    const checkNumber = persons.filter(persona => newNumber === persona.number)
   
    if (checkName[0] !== undefined){
      alert(`${newName} is already added to phonebook`)
    } 
    else if(checkNumber[0] !== undefined){
      alert(`${newNumber} is already added to phonebook`)
    }
    else{      
      personService
      .create(personObject)
      .then(response => 
        setPersons(persons.concat(response.data)))
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

      <h3>Add a new</h3>
     <PersonForm addNote={addNote} newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber}/>

      <h2>Numbers</h2>
       <Person persons={persons}/>
    </div>
  )
}

export default App
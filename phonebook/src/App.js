import React, { useState, useEffect } from 'react'
import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'
import personService from './services/persons'
import Notification from './Components/Notifications'
import "./index.css"
import Filter from './Components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)
  const [successMessage, setSuccessMessage] = useState(null)
  const [filter, setFilter] = useState('')

  useEffect(()=>{
    personService
    .getAll()
    .then(initialPerson => {
      setPersons(initialPerson)
    })
  }, [])
  
  const addPerson = (event) =>{
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
        setPersons(persons.concat(response)))
        setNewName('')
        setNewNumber('')

        setSuccessMessage(`${newName} is added to phonebook`)
        setTimeout(()=> {
          setSuccessMessage(null)}, 2000)
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
  const clear = (name, id) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)){
      personService
      .remove(id)
      .then(response=> response.data)
    }
    window.location.reload(false)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }


     return (
    <div className= "body">
      <h2>Phonebook</h2>

      <Filter value ={filter} onChange={handleFilter}/>
     
     <Notification message={successMessage}/>

      <h3>Add a new</h3>

     <PersonForm add={addPerson} newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber}/>

      <h2>Numbers</h2>
      <Persons persons={persons} clear={clear} filter={filter}/>

    </div>
  )
}

export default App
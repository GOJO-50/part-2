import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([ { name: 'Arto Hellas' } ]) 
  const [ newName, setNewName ] = useState('')


  const addName = (event)=> {
    event.preventDefault()
    const nameObject = {
      name: newName,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const namesToAppear = persons ? persons : persons.filter(person => person.important === true)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input 
          value={newName} 
          onChange={handleName}
          />
        </div>
        <div >
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
     {/* used the person's name as the id */}
        <div>
            {namesToAppear.map(person => <p key={person.name}>{person.name}</p>)}
        </div>
    </div>
  )
  
}

export default App
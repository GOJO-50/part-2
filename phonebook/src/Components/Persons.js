const Persons = ({persons, clear}) => {
    let person = persons.map(person => <p key={person.id}>{person.name} {person.number} 
    <button onClick= {() => clear(person.name, person.id)}>Delete</button>
    </p>)

   return(
    <div>
    {person}
    </div>
   )
}
export default Persons
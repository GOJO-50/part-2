const Persons = ({persons, clear, filter}) => {
    const search = () => {
        const person = filter ? persons.filter(person=> person.name.toUpperCase().includes(filter.toUpperCase())) : persons

        const p = person.map(person => <p key={person.id}>{person.name} {person.number} 
            <button onClick= {() => clear(person.name, person.id)} className="del">Delete</button>
           </p>)

        return p
    }

     

   return(
    <div>
    {search()}
    </div>
   )
}
export default Persons
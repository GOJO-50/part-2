

const Person = ({persons}) => {
    let person = persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)
   return(
    <div>
    {person}
    </div>
   )
}
export default Person


const Person = ({persons}) => {
    let person = persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)
   return(
    <div>
    {person}
    </div>
   )
}
export default Person
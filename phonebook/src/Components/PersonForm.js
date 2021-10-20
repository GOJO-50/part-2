
const PersonForm=({addNote, newName, newNumber, handleNumber, handleName})=>{
    return(
        <div>
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
        </div>
    )
}
export default PersonForm
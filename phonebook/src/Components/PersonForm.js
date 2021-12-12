
const PersonForm=({add, newName, newNumber, handleNumber, handleName})=>{
    return(
        <div>
 <form onSubmit={add}>
 <div>
   Name: <input value={newName} onChange={handleName}/>
 </div>
 <div>
   Number: <input value={newNumber} onChange={handleNumber}/>
 </div>
 <div >
   <button type="submit" className="submit">add</button>
 </div>
</form>
        </div>
    )
}
export default PersonForm
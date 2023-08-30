import Note from './Note';
import AddNote from './AddNote';
function NotesList({notes, handleAddNote}){
    return(
          <div className="notes-list">
               {notes.map((note)=>{
                  return <Note id={note.id} text={note.text} date={note.date}></Note>
               })}
               <AddNote handleAddNote={handleAddNote}></AddNote>
          </div>
    )
}
export default NotesList;
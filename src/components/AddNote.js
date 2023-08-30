import {useState} from 'react';
function AddNote( {handleAddNote}){
    const [noteText,setNoteText]=useState('');

    const handleChange = (event) =>{
        setNoteText(event.target.value);
    };
    
    const handleSaveClick = () =>{
               handleAddNote(noteText)
    } 

    return(
         <div className="note newnote">
               <textarea rows='3' cols='10' placeholder="Title name" 
                    onChange={handleChange}>
               </textarea>
               <div className="note-footer">
                     <button className="save" onClick={handleSaveClick}>Save</button>
               </div>
         </div>
    )
}
export default AddNote;
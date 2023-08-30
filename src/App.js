import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid';
import {useState} from 'react'
function App() {
  const [notes,setNotes] = useState([
    {
    id:nanoid(),
    text:"Untitled1",
    date:"24/10/2022",
    },
    {
       id: nanoid(),
       text:"Untitled2",
       date:"24/10/2024",
    },
    {
      id: nanoid(),
      text:"Untitled3",
      date:"24/10/2024",
   },
]);

  const addNote = (text)=>{
           console.log(text);
  }
  return (
      <div className="container">
            <NotesList notes={notes} handleAddNote={addNote}></NotesList>
      </div>
  );
}

export default App;

import { useState } from 'react';
import {MdDeleteForever} from 'react-icons/md';
import Main from './Main';
function Note({id,text}){
    return(
        <div className="note">
               <h1>{text}</h1>
               <div className="note-footer">
                    <Main></Main>
                   <MdDeleteForever className='delete-icon' size='1.3em'/>
               </div>
        </div>
    )
}
export default Note;
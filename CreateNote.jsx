import React, { useState } from 'react'
import './Googlekeep.css'


const CreateNote = (props) => {
  const[note,setnote]=useState({
    title:'',
    content:'' 
  });
  const [expand,setexpand]=useState(false);
  

  const InputEvent=(event)=>{

    const{value,name}=event.target;
    
    setnote((prevData)=>{
      return{
        
        ...prevData,
         [name]:value, 
        
    };
    });
    
  };
  const expandIt=()=>{
    setexpand(true);
  }
  const onsubmit=(event)=>{
    event.preventDefault();
   props.passNote(note); 
   setnote({

    title:'',
    content:'' 
   })
  }



  return (
    <>
   <div className='main_note'>
    <form>
      {
      expand?
        <input type="text"
         value={note.title} 
         onChange={InputEvent}
         name='title'
         placeholder='Title'
          autoComplete='off'/>:null}
      

        <textarea cols="30" 
         value={note.content}
         onChange={InputEvent}
         name='content'
         rows=""
         placeholder='Write a Note'
         onClick={expandIt}
         >
            
        </textarea>
        <button onClick={onsubmit}>➕</button>
       
    </form>
  
   </div>
  
   

    </>
  )
}

export default CreateNote
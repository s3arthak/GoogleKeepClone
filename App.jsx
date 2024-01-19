import React,{useState} from 'react'
import Head from './Head';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

import './Googlekeep.css' ;


const App = () => {
  const [addItem,setaddItem] = useState([]);

  const ontapp=(note)=>{
   setaddItem((prev)=>{
    return [...prev,note];
   })

  };
  const ondelete=(id)=>{
    setaddItem((olddata)=>
    olddata.filter((currdata,index)=>{
      return index !==id;
    
  })
  
    )
  };
  

  return (
   <>
  <Head/>
  <CreateNote  passNote={ontapp}/>
  {
  addItem.map((val,index)=>{
    return(
    <Note
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    deleteItem={ondelete}/>
  );})}


  <Footer/>
  

  
   </>
  )
}


export default App
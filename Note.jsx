import React from 'react'

const Note = (props) => {
  const deletenote=()=>{
    props.deleteItem(props.id);
  }
 
  return (
    <>
    <div className='note'>
      <h2>{props.title}</h2>
    <br />
    <p>{props.content}</p>
    <button onClick={deletenote}>➖</button>

    </div>
    </>
  )
}

export default Note
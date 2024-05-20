
import React, { useState } from 'react'



const Form = (props) => {

  let [tarea,setTarea]=useState("");


    const guardarTarea=(e)=>{
      setTarea(
        tarea = e.target.value
      
      )
    }

    const enviarTareas = (event)=>{
      event.preventDefault();
      if(tarea){
        props.setTareas([
          ...props.tareas,
          tarea
          ]
        )
      }
      setTarea("");
    }


    
return (
  <>
  <form onSubmit={enviarTareas}>
    <input className='inputTask' type="text" placeholder="Add task" onChange={guardarTarea} value={tarea}/>
    <input type="submit"  value="Add" className='btn'/>
  </form>
  
  
  </>
)



};

export default Form;





import React from 'react'


const Tasks = (props) => {

  


  const deleteTask=(event)=>{
    const deleteInd = event.target.parentElement.attributes.value.value
    
    props.setTareas(
      props.tareas.filter((tarea,index)=>index!==Number(deleteInd)
      )
    )
    
  }
  const tacharTarea =(event)=>{
    if(event.target.checked){
      event.target.previousSibling.style.textDecorationLine = "line-through";
    } else event.target.previousSibling.style.textDecorationLine = "none";
    
  }
  return( 
    <>

    {props.tareas.map((tarea, index) => {
    
    
    return (<div className="tareas" key={index} value={index}>
              <div className="tareacheck">
                <div className="contenedorTarea">
                  {tarea}
                </div>  
                <input className="check" type="checkbox" onChange={tacharTarea}></input>
              </div>
              <input className="delete" type="button" value={"DELETE"} onClick={deleteTask}/>
            </div>
            
          )
  
  
  }
    )
    
    }




    </>
  )
};

export default Tasks;

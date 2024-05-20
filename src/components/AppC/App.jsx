import './App.css';
import Form from '../Form/Form'
import Tasks from '../Task/Task'
import React, { useState } from 'react'



function App() {
    const [tareas,setTareas]= useState([]);



  console.log(tareas)


  return (
    <div className="App">
      <Form setTareas={setTareas} tareas={tareas}/>
      <Tasks tareas={tareas} setTareas={setTareas} />
    </div>
  );
}

export default App;

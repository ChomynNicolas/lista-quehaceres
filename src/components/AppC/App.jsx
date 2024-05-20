import './App.css';
import Form from '../Form/Form'
import Tasks from '../Task/Task'
import React, { useState, useEffect } from 'react'



function App() {
    
    const [value] = useState(() => {
      const saved = localStorage.getItem('myKey');
      return saved !== null ? JSON.parse(saved) : [];
    });
    const [tareas,setTareas]= useState(value);
    

    useEffect(() => {
      localStorage.setItem('myKey', JSON.stringify(tareas));
      
    }, [tareas]);


    


  







  return (
    <div className="App">
      <Form setTareas={setTareas} tareas={tareas}/>
      <Tasks tareas={tareas} setTareas={setTareas} />
    </div>
  );
}

export default App;

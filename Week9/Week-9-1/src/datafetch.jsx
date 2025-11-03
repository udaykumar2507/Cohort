import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const usetodos=()=>{
    const [todos,setTodos]=useState([]);
    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await axios.get('https://sum-server.100xdevs.com/todos');
                if (response) {
                    setTodos(response.data.todos);
                }
            } catch (error) {
                console.error("Error fetching todos:", error);
            }  
    }
    fetchTodos();
    }, []);
    return todos;
}
const datafetch = () => {
  const todos=usetodos();
  
    return (
    <div>
        {todos.map((todo)=>
               <Todos key={todo.id} todo={todo} /> 
        )}
    </div>
  )
}

function Todos({todo}){
    return(
        <div>
            <h3>{todo.title}</h3>
            <br />
            <p>{todo.description}</p>
        </div>
    )
}

export default datafetch

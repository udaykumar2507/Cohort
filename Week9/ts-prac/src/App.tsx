import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo title='Workout' description='Go to gym' done ={false}></Todo>
      <Todo title='Workout' description='Go to gym' done ={false}></Todo>
      
    </>
  )
}
interface TodoProps{
  title:string;
  description :string;
  done:boolean
}

type TodoType = {
  title:string;
  description :string;
  done:boolean
}

type name = string | number;
const Todo =(todo:TodoType)=>{
  return (
    <>
      <span>{todo.title}  </span>
      <span>{todo.description}</span>
      <p>{todo.done ? "Completed" : "Pending"}</p>
    </>
  )
}

export default App

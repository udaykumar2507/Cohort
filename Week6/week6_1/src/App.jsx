import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
        <Heading title ={"Hii this is Sam"}/>
        <Heading title ={"Hii this is Sam"}/>
    </>
  )
  function Heading(props){
    return (
      <h1>{props.title}</h1>
    )
  }
}

export default App
 
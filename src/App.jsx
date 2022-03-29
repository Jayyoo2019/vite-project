import './App.css'
import List from './components/List'
import Hello from './components/Hello'
import Toeic from './components/Toeic'
import React, { useState } from 'react'


function App() {
  return (
    <div className="App">
      <div>
        <List />
        <Toeic/>
        <Hello age={30}/>
      </div>
      
    </div>
  )
}

export default App

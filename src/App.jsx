import './App.css'
import List from './components/List'
import Hello from './components/Hello'
import React, { useState } from 'react'


function App() {
  return (
    <div className="App">
      <div>
        <List />
        <Hello age={30}/>
      </div>
      
    </div>
  )
}

export default App

import React from 'react'
import Sidebar from './components/Sidebar/sidebar.jsx'
import Main from './components/Main/main.jsx'
import './App.css'

const App = () => {
  return (
    <div className="app" >
      <Sidebar />
      <Main />
    </div>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CreateNote from './pages/CreateNote'
import UpdateNote from './pages/UpdateNote'

function App() {

  return (
    <Routes>
      <Route element={<><Layout /></>}>
        <Route index path='/' element={<Home />} />
        <Route path='/createnote' element={<CreateNote />} />
        <Route path='/note/:id' element={<UpdateNote />} />
      </Route>
    </Routes>
  )
}

export default App

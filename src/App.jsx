import React from 'react'
import './App.css'
import {Outlet} from 'react-router-dom';
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      // O Outlet permite que um elemento seja renderizado dependendo da url (rota) especificada
      <Outlet />
    </>
  )
}

export default App

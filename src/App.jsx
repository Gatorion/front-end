import React, { useState } from 'react'
import './App.css'
import Aside from '/src/components/Aside'
import SocialMedia from '/src/components/SocialMedia'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className='content'>
        <Aside />
        <SocialMedia />
      </div>
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import LogoutHeader from './components/LogoutHeader/LogoutHeader'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { usuarioAutenticado } from './auth';

function App() {
  return (
    <>
      {usuarioAutenticado ? <Header /> : <LogoutHeader />}
      {/*O Outlet permite que um elemento seja renderizado dependendo da url (rota) especificada */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
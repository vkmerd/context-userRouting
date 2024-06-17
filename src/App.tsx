import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import {UserProvider} from './LoginContext'

import './reset.css'
function App() {

  return (
    <>
    <UserProvider>
      <Header />
      <main>
        <Outlet />
      </main>
    </UserProvider>
    </>
  )
}

export default App

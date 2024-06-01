import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes,Switch, Redirect } from 'react-router-dom'

const Layout = ({children}) => {
}
const App = ({children}) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(!sidebar)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className='flex text-xl text-black'>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
        <Container sidebar={sidebar} fluid className={`transform ${ sidebar ? "ml-[250px]" : ""}`}>
             {/* <HomeScreen/> */}
             {children}
           </Container>
      </div>
    </>
  )
}

export default App
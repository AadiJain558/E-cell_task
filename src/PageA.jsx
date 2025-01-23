import React from 'react'
import Navbar from './components/Navbar'
import Purplebox from './components/Purplebox'
import Logo from './components/Logo'
import Grid from './components/Grid'
import './PageA.css'
const PageA = () => {
  return (
    <>
      <Navbar />
      <div id='content'>
        <Purplebox />
        <Logo />
        <Grid />
      </div>
    </>
  )
}

export default PageA

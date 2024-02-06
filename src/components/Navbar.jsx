import React, { useState } from 'react'
import '../styles/navbar.css'
import { useTheme } from '../context/ThemeContext'
const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
    <header className={`${isDarkMode ? 'darkHeader' : ' '}`} >
        <h1 className={`${isDarkMode ? 'night' : 'day'}`}>Where in the world?</h1>
       <div className={`darkMode ${isDarkMode ? 'night' : 'day'}`}  onClick={toggleTheme}>
       <i className='fa-solid fa-moon'></i>
        <p>Dark Mode</p>
       </div>
    </header>
    </>
  )
}

export default Navbar

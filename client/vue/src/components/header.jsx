import { useState } from 'react'


import './css/header.css';

function Header({label}) {
  

  return (
    <header className="header-container">
        <h1>{label}</h1>
    </header>
  )
}

export default Header
import { useState } from 'react'


import './css/button.css';

function Button({label, onClick}) {
  

  return (
    <button className='button-component' onClick={onClick}>{label}</button>
  )
}

export default Button

import { useState } from 'react'


import './css/inputGroup.css';

function InputGroup({type, name, labelName, placeholder, value, onChange}) {
  

  return (
    <div className="inputGroup-container">
        <label htmlFor={labelName}>{labelName}</label>
        <input id={labelName} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

export default InputGroup
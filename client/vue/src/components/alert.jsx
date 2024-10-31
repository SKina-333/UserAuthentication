import { useState } from 'react'




function Alert({alert, isShown}) {
  

  return (
    <>
        {isShown && 
        <div className="alert-container">
            <p>{alert}</p>
        </div>
        }
    </>
    
  )
}

export default Alert
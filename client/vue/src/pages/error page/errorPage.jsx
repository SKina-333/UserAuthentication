import { useState } from 'react'



function ErrorPage() {
  const [count, setCount] = useState(0)

  return (
    <>

      <header className="header-container">
        <h1>Welcome to my error page</h1>
      </header>
      
    </>
  )
}

export default ErrorPage

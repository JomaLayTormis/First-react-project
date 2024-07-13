import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>First React Creation</h1>
      <h2>What is react?</h2>
      <p>React is a free and open-source front-end JavaScript library 
        for building user interfaces based on components by Facebook Inc. <br/>
        It is maintained by Meta and a community of individual developers and companies. <br/>
        React can be used to develop single-page, mobile, or server-rendered applications 
        with frameworks like Next.js.<br/>
        </p>
        <h4>Members</h4>
        <p> 1. Tormis, Joma Lay M.<br/>
            2. Rebojo, Orencio A.<br/>
        </p>

        
    </div>
  )
}

export default App

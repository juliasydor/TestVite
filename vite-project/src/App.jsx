import { useState } from 'react'
import instagramLogo from './assets/instagram.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
          <img src={instagramLogo} className="logo Instagram" alt="Instagram logo" />
      </div>
      <div className="card">
        <p>
          <a href="#">forgotten password?</a>
        </p>
        <button>
          Log In
        </button>
        <p>
          <a href="#">login with facebook</a>
        </p>
      </div>
      <p className="footer">
        don't have a account? <a href="#">sign Up</a>
      </p>
    </div>
  )
}

export default App

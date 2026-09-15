import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <h1>Hello, World</h1>
      <p>I am Writing JSX</p>
    </div>
  )
}

export default App

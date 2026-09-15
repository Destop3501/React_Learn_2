import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const dispalyEmojiName = (event) => alert(event.target.id)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Hello, World</h1>
      <p>I am Writing JSX</p>
      <ul>
        <li>
          {/* <button onClick={(event) => alert(event.target.id)}>
            <span role='img' aria-label='grinning face' id='grinning-face'>😀</span>
          </button> */}
          <button onClick={dispalyEmojiName}>
            <span role='img' aria-label='grinning face' id='grinning-face'>😀</span>
          </button>
        </li>
        <li>
          {/* <button onClick={(event) => alert(event.target.id)}>
            <span role='img' aria-label='party popper' id='party-popper'>🎉</span>
          </button> */}
          <button onClick={dispalyEmojiName}>
            <span role='img' aria-label='party popper' id='party-popper'>🎉</span>
          </button>
        </li>
        <li>
          {/* <button onClick={(event) => alert(event.target.id)}>
            <span role='img' aria-label='woman dancing' id='dancing-woman'>💃</span>
          </button> */}
          <button onClick={dispalyEmojiName}>
            <span role='img' aria-label='woman dancing' id='dancing-woman'>💃</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default App

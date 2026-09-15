import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Map from './compnent/Map.jsx'
import Instruction from './compnent/Instruction.jsx'

const dispalyEmojiName = (event) => alert(event.target.id)

const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
]

function App() {
  const displayAction = false;

  return (
    <div className="container">
      <h1>Hello, World</h1>
      {displayAction && <p>I am Writing JSX</p>}
      <Instruction />
      <ul>
        {/* <li>
          <button onClick={(event) => alert(event.target.id)}>
            <span role='img' aria-label='grinning face' id='grinning-face'>😀</span>
          </button> 
          <button onClick={dispalyEmojiName}>
            <span role='img' aria-label='grinning face' id='grinning-face'>😀</span>
          </button>
        </li>
        <li>
          <button onClick={(event) => alert(event.target.id)}>
            <span role='img' aria-label='party popper' id='party-popper'>🎉</span>
          </button> 
          <button onClick={dispalyEmojiName}>
            <span role='img' aria-label='party popper' id='party-popper'>🎉</span>
          </button>
        </li>
        <li>
          <button onClick={(event) => alert(event.target.id)}>
            <span role='img' aria-label='woman dancing' id='dancing-woman'>💃</span>
          </button> 
          <button onClick={dispalyEmojiName}>
            <span role='img' aria-label='woman dancing' id='dancing-woman'>💃</span>
          </button>
        </li> */}
        {emojis.map(emoji => (
          <li key={emoji.name}>
            <button onClick={dispalyEmojiName}>
              <span role='img' aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
            </button>
          </li>
        ))}
      </ul>
      <Map />
    </div>
  )
}

export default App

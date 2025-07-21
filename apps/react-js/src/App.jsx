import './App.css'

import { Test } from './test'
import { flushSync } from 'react-dom'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import viteLogo from '/vite.svg'

function App({ name }) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prevCount => prevCount + 2)
    flushSync(() => {
      setCount(count + 1)
      console.log('Inside flushSync:', count) // This will show updated value
    })
    console.log('Outside flushSync:', count) // This shows old value
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React 1 {name} <Test /></h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

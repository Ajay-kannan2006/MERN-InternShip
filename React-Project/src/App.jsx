import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComp from './ClassComp'
import Gallery from './Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClassComp />
      <Gallery image="SECE Logo" />
    </>
  )
}

export default App

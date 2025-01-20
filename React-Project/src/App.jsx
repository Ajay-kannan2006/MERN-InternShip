import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComp from './ClassComp'
import Gallery from './Gallery'
import Contact from './Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ClassComp />
      <Gallery image="SECE Logo" />
      <Contact />
    </>
  )
}

export default App

import React, { useState } from 'react'
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import '../style/style.scss'

const App = () => {

  const [display, setDisplay] = useState(false)

  function showContent() {
    setDisplay(true)
  }

  return (
    <div>
      <Landing showContent={() => showContent()} />

      {display ? <>
        <About />
        <Projects />
        <Contact />
      </>
        : null}
    </div>

  )
}

export default App

import React, { useEffect, useState } from 'react'
import { LiquidDistortionText } from 'react-text-fun'
import { TimelineLite, gsap, CSSPlugin, Expo } from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'

gsap.registerPlugin(CSSPlugin)

const Landing = ({ showContent }) => {

  const [counter, setCounter] = useState(0)
  const [nav, setNav] = useState(['Digital Craftman ?', 'Recent Projects', 'Talk & Stalk'])

  useEffect(() => {
    AOS.init()

    const count = setInterval(() => {
      setCounter(counter => (
        counter < 100 ? setCounter(counter + 1) : (
          clearInterval(count),
          setCounter(100),
          reveal()
        )
      ))
    }, 25)
  })

  const reveal = () => {
    const t1 = new TimelineLite({
      onComplete: () => {
        showContent()
      }
    })
    t1
      .to('.follow', { duration: 1.2, width: '100%', ease: Expo.easeInOut }, '+=0.7')
      .to('.hide', { duration: 0.3, opacity: 0 })
      .to('.hide', { duration: 0.1, display: 'none' })
      .to('.follow', { duration: 0.7, height: '100%', ease: Expo.easeInOut }, '+=0.5')
      .to('.content', { duration: 0.7, width: '100%', ease: Expo.easeInOut })
      .to('.title-lines', { duration: 0.1, display: 'block' })
      .to('.title-lines', { duration: 0.6, opacity: 1, stagger: 0.15, ease: Expo.easeInOut })
      .to('#scroll, li', {duration: 0.4, opacity: 1 }, '-=0.3')
      .to('main', {duration: 0.1, marginBottom: '15vw' })
  }

  const scroll = e => {
    const section = document.querySelectorAll('.section-title')

    switch (e.target.innerHTML) {
      case 'Digital CraftMan ?':
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
        break
      case 'Recent Projects':
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
        break
      case 'Talk & Stalk':
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
        break
      default:
    }
  }

  return (

    <main >
      <div className='loading'>
        <div className="follow"></div>
        <div className='hide' id='progress-bar' style={{ width: counter + '%' }} ></div>
        <p id='count' className='hide'> {counter}% </p>
      </div>
      <div className='content'>
        <div id='scroll'>Atelier</div>
        <section>
          <p className='title-lines'> <span>“</span>C<span>o</span>DE<span>R</span></p>
          <p className='title-lines'>  DESI<span>G</span>N <span>A</span>DDICT  </p>
          <p className='title-lines'>  <span>A</span>BST<span>RA</span>CT </p>
          <p className='title-lines'>T<span>H</span>INKE<span>R”</span></p>
        </section>
        <nav>
          <ul>
            {nav.map((nav, i) => {
              return (
                <li key={i} onClick={e => scroll(e)} >
                  <LiquidDistortionText
                    text={'-' + nav}
                    fill='#ff6200d8'
                    fontSize={19}
                    speed={0.3}
                    volatility={0.023}
                    fontFamily='arial'
                    fontWeight={500}
                    paddingRight={5}
                  />
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </main >
  )
}

export default Landing
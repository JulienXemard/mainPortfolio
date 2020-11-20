import React, { useEffect, useState } from 'react'
import hoverEffect from 'hover-effect'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {

  const [projectTitles, setProjectTitles] = useState(['X-Wings', 'WeatherUp', 'Nalu', 'APPerture'])

  useEffect(() => {

    AOS.init()

    new hoverEffect({
      parent: document.querySelector('#xWings-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/plD3syj.png',
      image2: 'https://i.imgur.com/NLBPiNF.png',
      displacementImage: 'https://i.imgur.com/WtE8GdV.jpg',
      speedIn: 1.5,
      speedOut: 1.5
    })

    new hoverEffect({
      parent: document.querySelector('#weatherUp-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/C9oaEVK.png',
      image2: 'https://i.imgur.com/6fXERmm.png',
      displacementImage: 'https://i.imgur.com/WtE8GdV.jpg',
      speedIn: 1.5,
      speedOut: 1.5
    })

    new hoverEffect({
      parent: document.querySelector('#nalu-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/TwGF1iI.png',
      image2: 'https://i.imgur.com/Do0oqjS.png',
      displacementImage: 'https://i.imgur.com/WtE8GdV.jpg',
      speedIn: 1.5,
      speedOut: 1.5
    })

    new hoverEffect({
      parent: document.querySelector('#apperture-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/UMFrQ4F.png',
      image2: 'https://i.imgur.com/AtbKZVD.png',
      displacementImage: 'https://i.imgur.com/WtE8GdV.jpg',
      speedIn: 1.5,
      speedOut: 1.5
    })

  }, [])

  const show = e => {
    e.target.firstChild.innerText = 'let click = 🧐 ?'
  }

  const remove = e => {
    const images = ['xWings-image', 'weeatherUp-imgage', 'nalu-image', 'appererture-image']
    const dates = ['July 25th, 2020', 'August 13th, 2020', 'August 28th, 2020', 'September 17th, 2020']

    images.map((p, i) => e.target.id === p ? e.target.firstChild.innerText = dates[i] : null)
  }

  return (
    <>
      <div id='para' data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease"
        data-aos-offset="200">
        <h1 className='section-title'> <small> (002) </small> Recent Projects </h1>
      </div>

      <h5 className='text-slider'>
        <span>
          | X-WIngs | X-WIngs | X-WIngs | X-WIngs | X-WIngs | X-WIngs | X-WIngs
          | X-WIngs | X-WIngs | X-WIngs | X-WIngs | X-WIngs | X-WIngs | X-WIngs
        </span>
      </h5>

      <div className="xWings-container">
        <a href="https://julienxemard.github.io/gameProject/" rel="noreferrer" target='_blank'>
          <div id="xWings-image"
            data-aos="fade-up" data-aos-offset="300"
            data-aos-duration="800" data-aos-easing="ease"
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}>
            <p> July 25th, 2020 </p>
          </div>
        </a>
        <img src="https://i.imgur.com/plD3syj.png" alt="X-Wing img"
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease"/>

        <div id='proj-text'
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="1000" data-aos-easing="ease">

          <h1> X-Wings </h1>
          <div></div>
          <p><small> Project Brief </small><br /><br />
            The game offers the user an immersive Star Wars shooting experience which includes a AR space wrap. This first project gave me a good understanding of what developers are dealing with in reality! The mental satisfaction once you solve a frustrating logical challenge coverted me.<br /><br />
            
            The brief allowed for 7 days to create a game strictly restricted to vanilla JS (no canvas), HTML & CSS. Researching solutions to implement 3D along with 2D really was interestin: it opened my eyes on the programming community & the ressources available to help you grow.
          </p>
          <br /><br />
          <small> Technologies Featured </small>
          <br /><br />
          <ul>
            <li> JavaScript (ES6) </li>
            <li> HTML5 | CSS </li>
          </ul>
          <br />
          <br />
          <a href='https://github.com/JulienXemard/gameProject'
            rel="noopener noreferrer" 
            target="_blank">
            <ion-icon name="logo-github"></ion-icon> 
            View Repo 
          </a>
          <br/>
          <a href='https://julienxemard.github.io/gameProject/' 
            rel="noopener noreferrer" 
            target="_blank">
            <ion-icon name="link-outline"></ion-icon> 
            Link 
          </a>
        </div>
        <svg id='circle-1' width="23vw" height="23vw" className="circle">
          <circle cx="11.5vw" cy="11.5vw" r="11.4vw" />
        </svg>
        <div className="arrow"></div>
      </div >

      <h5 className='text-slider'>
        <span>
        | WeatherUp | WeatherUp | WeatherUp | WeatherUp | WeatherUp | WeatherUp
        | WeatherUp | WeatherUp | WeatherUp | WeatherUp | WeatherUp | WeatherUp
        </span>
      </h5>
      <div className="weatherUp-container">
        <div id="weatherUp-image"
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease"
          onMouseEnter={(e) => show(e)}
          onMouseLeave={(e) => remove(e)}>
          <p> August 13th, 2020 </p>
        </div>

        <img src="https://i.imgur.com/C9oaEVK.png" alt="weatherUp img"
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease"/>

        <div id='proj-text'
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="1000" data-aos-easing="ease">

          <h1> WeatherUp </h1>
          <p><small> Project Brief </small><br />
            A 48h Hackathon in pair coding format to create a React front-end application using punlic API. 
            WeatherUP App is linked to 4 APIs<br /><br />
            The App gives users all bike point locations, subway stations around as well as weather & polution metrics related to their geolocation.
            This project gave an excellent introduction to pair coding & the necessity to communicate around clear deadlines to reach the project ambitous objectives.<br /><br />
            Fortunately my collaboration with Brenda Ty, who has similar work ethics "along with a  personality", spiced up this Hackathon.
          </p>
          <br /><br />
          <small> Technologies Featured </small>
          <br /><br />
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6) </li>
            <li> HTML5 | SASS | Bulma </li>
            <li> Axios </li>
          </ul>
          <br />
          <a href='https://github.com/JulienXemard/reactProject'
            rel="noopener noreferrer" 
            target="_blank">
            <ion-icon name="logo-github"></ion-icon> 
            View Repo 
          </a>
          <br/>
          <a href='https://github.com/JulienXemard/reactProject' 
            rel="noopener noreferrer" 
            target="_blank">
            <ion-icon name="link-outline"></ion-icon> 
            Link 
          </a>
        </div>
        <svg id='circle-1' width="23vw" height="23vw" className="circle">
          <circle cx="11.5vw" cy="11.5vw" r="11.4vw" />
        </svg>
        <div className="arrow"></div>
      </div >

      <h5 className='text-slider'>
        <span>
          - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER
          - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER -
        </span>
      </h5>

      <div className="fin-container">
        <a href="http://seangpachareonsub.com/financier/" target='_blank'>
          <div data-aos="fade-up" data-aos-offset="300"
            data-aos-duration="800" data-aos-easing="ease"
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)} id="fin-image">
            <p> 11.03.20 </p>
          </div>
        </a>
        <img id='fin-imageTwo' data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease"
          src="https://i.imgur.com/8jmRsRA.png" alt="" />

        <div data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="1000" data-aos-easing="ease"
          id='proj-text'>
          <h1> Financier </h1>
          <p> <small> PRJ CONCPT </small> <br />
            A paired production of a React front-end application consuming a public API.
            Financier aims to bridge together the most relevant global news and updated
            CryptoCurrency market prices.
            <br /> <br />
            The application's interface allows users to browse as well as search for specific
            news articles and is equipped with a user interactive CryptoCurrency price chart.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6) </li>
            <li> HTML5/SASS </li>
            <li> Moment.js</li>
            <li> Axios </li>
            <li> New York Times API </li>
            <li> CoinGecko API </li>
          </ul>
          <br />
          <a href='https://github.com/seangpachareonsub/financier'>
            <ion-icon name="logo-github"></ion-icon> VIEW REPO </a>
        </div>

        <svg id='circle-1' width="23vw" height="23vw" className="circle">
          <circle cx="11.5vw" cy="11.5vw" r="11.4vw" />
        </svg>
        <div className="arrow"></div>
      </div >

      <h5 className='text-slider'>
        <span>
          - PACMAN - PACMAN  - PACMAN  - PACMAN  - PACMAN - PACMAN  - PACMAN
          - PACMAN - PACMAN  - PACMAN  - PACMAN  - PACMAN - PACMAN  - PACMAN -
        </span>
      </h5>
      <h6> More projects coming soon ... </h6>
    </>
  )

}

export default Projects
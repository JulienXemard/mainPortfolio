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
    const images = ['xWings-image', 'weatherUp-image', 'nalu-image', 'apperture-image']
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
        <img src="https://i.imgur.com/NLBPiNF.png" alt="X-Wing img"
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

        <img src="https://i.imgur.com/6fXERmm.png" alt="weatherUp img"
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease"/>

        <div id='proj-text'
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="1000" data-aos-easing="ease">

          <h1> WeatherUp </h1>
          <p><small> Project Brief </small><br /><br />
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
          | Nalu | Nalu | Nalu | Nalu | Nalu | Nalu | Nalu | Nalu | Nalu
          | Nalu | Nalu | Nalu | Nalu | Nalu | Nalu | Nalu | Nalu | Nalu
        </span>
      </h5>

      <div className="nalu-container">
        <a href="https://julienxemard.github.io/gameProject/" rel="noreferrer" target='_blank'>
          <div id="nalu-image"
            data-aos="fade-up" data-aos-offset="300"
            data-aos-duration="800" data-aos-easing="ease"
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}>
            <p> August 28th, 2020 </p>
          </div>
        </a>
        <img src="https://i.imgur.com/Do0oqjS.png" alt="Nalu img"
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease"/>

        <div id='proj-text'
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="1000" data-aos-easing="ease">

          <h1> Nalu </h1>
          <div></div>
          <p><small> Project Brief </small><br /><br />
            Nalu allows users to find all the best surf spots around the world with their current weather & tidal information relinking up to various publick APIs. Users can review, rate each spots & add them as favorite in their created account.<br /><br />
            The client brief provisionned for 7 days to create a ReactJS front-end along with a MongoDB & Express.js (Node.js) as a Backend. This project was my first full stack application which still requires some finishes. Kindly visit the repository to follow the App progression.
          </p>
          <br /><br />
          <small> Technologies Featured </small>
          <br /><br />
          <ul>
          <li> React.js </li>
            <li> JavaScript (ES6) </li>
            <li> MongoDB </li>
            <li> Mongoose </li>
            <li> Node.js </li>
            <li> Express.js</li>
            <li> HTML5 | sass | Bulma </li>
            <li> Axios </li>
            <li> JSON Web Token </li>
          </ul>
          <br />
          <br />
          <a href='https://github.com/JulienXemard/mongoReact-Project'
            rel="noopener noreferrer" 
            target="_blank">
            <ion-icon name="logo-github"></ion-icon> 
            View Repo 
          </a>
          <br/>
          <a href='https://naluwave.herokuapp.com/' 
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
        | APPerture | APPerture | APPerture | APPerture | APPerture | APPerture
        | APPerture | APPerture | APPerture | APPerture | APPerture | APPerture
        </span>
      </h5>
      <div className="apperture-container">
        <div id="apperture-image"
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease"
          onMouseEnter={(e) => show(e)}
          onMouseLeave={(e) => remove(e)}>
          <p> September 17th, 2020 </p>
        </div>

        <img src="https://i.imgur.com/AtbKZVD.png" alt="weatherUp img"
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease"/>

        <div id='proj-text'
          data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="1000" data-aos-easing="ease">

          <h1> APPerture </h1>
          <p><small> Project Brief </small><br /><br />
            A Project created in 7 days using Python & Django as back-end technologies.
            I worked in collaboration with Brenda Ty, another Full Stack developper who equally shares an interest for photographes.
            <br /><br /> We decided to use the lastest React Hooks methods along with Material UI. With no previous experience or knowledge, we also included some of React-Spring features to render some parallax effects.
            <br /><br /> APPerture has been inspired by Instagram. Our application allows users to created a profile & post monochrome photographes with the abilities to follow, leave comments & like each others.
          </p>
          <br /><br />
          <small> Technologies Featured </small>
          <br /><br />
          <ul>
          <li> React.js </li>
            <li> JavaScript (ES6)</li>
            <li> Django Rest Framework </li>
            <li> Python </li>
            <li> PostgreSQL</li>
            <li> HTML5 | CSS </li>
            <li> Material UI </li>
            <li> Axios </li>
            <li> JSON Web Token </li>
            <li> React Map GL </li>
          </ul>
          <br />
          <a href='http://apperture-project.herokuapp.com/'
            rel="noopener noreferrer" 
            target="_blank">
            <ion-icon name="logo-github"></ion-icon> 
            View Repo 
          </a>
          <br/>
          <a href='https://github.com/JulienXemard/APPerture-FinalProject' 
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

      <h6> More projects coming soon ... </h6>
    </>
  )

}

export default Projects
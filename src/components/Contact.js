import React, { useEffect } from 'react'
import { SvgIcon } from './Icons'
import AOS from 'aos'
import 'aos/dist/aos.css'


const content = [
  {
    icon: 'email',
    text: 'julien.xemard@outlook.com',
    link: 'mailto:julien.xemard@outlook.com'
  },
  {
    icon: 'linkedIn',
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/julienxemard/'
  },
  {
    icon: 'github',
    text: 'GitHub',
    link: 'https://github.com/JulienXemard'
  }
]

const Contact = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="800" data-aos-easing="ease"
        id='para'>
        <h1 className='section-title'>
          <small> (003) </small> <span> Talk & Stalk </span>
        </h1>
      </div>
      <div className="contact">
        {content.map(link => (
          <div key={link.text} className="info-lines">
            <a href={link.link} rel="noreferrer noopener" target="_blank">
              <SvgIcon
                width={40}
                height={40}
                icon={link.icon}
                primaryFill={'#ff6200d8'}
                secondaryFill={'#242323'}
                backgroundFill={'#242323'}
              />
            </a>
          </div>
        ))}
      </div>
      <div id='atelierBC'>Atelier</div>
    </>
  )
}

export default Contact
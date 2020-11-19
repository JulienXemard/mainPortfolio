import React, { useEffect } from 'react'
import { SvgIcon } from './Icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

const proficientSkills = ['Node.js', 'JavaScript', 'React.js', 'MongoDB', 'PostgreSQL', 'GitHub', 'VScode', 'HTML', 'CSS']

const currentlyLearning = ['Python', 'Django', 'TypeScript', 'Jest']


const About = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div id="para"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease">
        <h1 className="section-title"><small>(001)</small> Who am I ?</h1>
      </div>
      <div id="para"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease">
        <h3>Bonjour<small>,</small> my name is Julien. </h3>
        <p>
          A Junior Full Stack Developer & a recent graduate of the Software Engineering
        programme at <span>M.I.T</span> General Assembly<small>,</small> London.
        </p>
      </div>
      <div id="para"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="250"
        data-aos-easing="ease">
        <p>
          Over the past 10 years, I evolved from Mid to Top Mangament positions until the creation
          of my own firm within the <span>Space</span> Retail industry.<br/> Fascinated by the digital impact in this very industry amongst other subjects such as Neuralink, Machine Learning, AR & Space,
          I undertook a professional reconversion.
        </p>
      </div>
      <div id="para"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="250"
        data-aos-easing="ease">
        <p>
          <small>“</small>Life is about experiences<small>”</small><br/>
          My work aims to offer minimalist design & clean <span>headhaches</span> solutions. 
          Constantly challenged by my learning addiction, I'm looking to join a team where I can learn 
          & <span>share a drink</span> develop my abilities, whilst contributing to the company's success.
        </p>
      </div>
      <div id="para"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease">
        <p>
          Off my screen<small>,</small> you will either find me on a Bresilien Jiu Jitsu mat or on a trail in the nature with Le Dog. I do not hate <span>pineapples on pizza</span> whiskey & wine on good occasions.
        </p>
      </div>
      <div id="para"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease">
        <p>Currently Learning<small>:</small></p>
        <div className="technologies">
          {currentlyLearning.map(icon => (
            <div key={icon} className="tech-logo">
              <SvgIcon
                className="svg"
                width={60}
                height={60}
                icon={icon}
                primaryFill={'#C67804'}
                secondaryFill={'#48575e'}
              />
            </div>
          ))}
        </div>
        <p>Proficient<small>:</small></p>
        <div className="technologies">
          {proficientSkills.map(icon => (
            <div key={icon} className="tech-logo">
              <SvgIcon
                className="svg"
                width={60}
                height={60}
                icon={icon}
                primaryFill={'#C67804'}
                secondaryFill={'#48575e'}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About
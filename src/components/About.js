import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
          of my own firm within the <span>Space</span> Retail industry. Fascinated by the digital impact in this very industry amongst other subjects such as <span>Sports</span> Neuralink, Machine Learning, AR & Space,
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
          Off my screen<small>,</small> you will either find me <span>watching motor sports</span> on a Bresilien Jiu Jitsu mat or on a trail in the nature with Le Dog. I do not hate <span>pineapples on pizza</span> whiskey & wine on good occasions.
        </p>
      </div>
    </>
  )
}

export default About
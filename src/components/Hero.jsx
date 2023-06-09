import React from 'react'
import { layout } from '../styles'
import { My01, My02 } from '../assets'
import { styles } from '../styles'
import ContactMe from './ContactMe'
import { reactjs, html, css, javascript } from '../assets'

const Hero = () => {
  return (
    <div className={`${layout.section} bg-hero flex justify-around min-h-[95%]`}>
      <div className={`${styles.flexCenter}`}>
        <div className={`flex flex-col`}>
          <h2 className={`${styles.heading2} text-white`}>
            Hi there 👋,<span className={`gradient-two`}> I'm  Abass</span>,
            a <br className={`sm:flex hidden`} />web <span className={`gradient-two`}>designer and dev</span>.
          </h2>
          <p className={`${styles.paragraph} sm:mt-7`}>
            i'm passionate about building beautiful user <br className={`sm:flex hidden`} /> interfaces and user experiences that tends to <br className={`sm:flex hidden`} />satisfy the client and appeal the users.
          </p>
          <ContactMe />
        </div>
      </div>
      <div className='relative'>
        <img src={My01} alt="my image" className={`sm:h-[600px] sm:w-[600px] w-[360px] h-[360px] object-contain relative z-[1] mt-14`} />
        <div className={`hero-skill-ring sm:w-[450px] sm:h-[450px] w-[310px] h-[310px] rounded-full absolute left-[5%] top-[25%]`}>
          <img src={reactjs} alt="reactjs" className={`absolute w-[50px] h-[50px] object-contain sm:top-[10%] top-[8%] sm:left-[8%] left-[6%]`} />
          <img src={javascript} alt="javascript" className={`absolute w-[50px] h-[50px] object-contain sm:right-[8%] right-[6%] sm:top-[10%] top-[8%]`} />
          <img src={html} alt="html" className={`absolute w-[50px] h-[50px] object-contain sm:bottom-[10%] bottom-[8%] sm:left-[8%] left-[6%]`} />
          <img src={css} alt="css" className={`absolute w-[50px] h-[50px] object-contain sm:bottom-[10%] bottom-[8%] sm:right-[8%] right-[6%]`} />
        </div>
      </div>
    </div>
  )
}

export default Hero
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './About.scss'

const abouts = [
  {title: 'Software Developer', description: 'I am a proficient developer with a passion for solving complex problems', imgUrl: images.about01},
  {title: 'Data Scientist', description: 'I enjoy using AI and interesting data to create actionable recommendations', imgUrl: images.about02},
  {title: 'Philonoist', description: 'My love for learning persists, driven by my intrinsic curious tendencies', imgUrl: images.about04},
  {title: 'Leader', description: 'I have a proclivity to bring out the best of the people around me', imgUrl: images.about03},
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>I know that <span>Great Code</span><br />means <span>Great Business</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{ marginTop: '20px' }}>{about.title}</h2>
            <h2 className='p-text' style={{ marginTop: '10px' }}>{about.description}</h2>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
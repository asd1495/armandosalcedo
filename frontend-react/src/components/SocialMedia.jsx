import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://github.com/asd1495" target='_blank' rel="noopener noreferrer">
          <div>
            <BsGithub /> 
          </div>
        </a>
        <a href="https://www.linkedin.com/in/armando-salcedo/" target='_blank' rel="noopener noreferrer">
          <div>
            <BsLinkedin />
          </div>
        </a>
    </div>
  )
}

export default SocialMedia
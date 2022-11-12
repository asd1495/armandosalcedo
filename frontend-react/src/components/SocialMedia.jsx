import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaCodepen } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://github.com/asd1495" target='_blank' rel="noopener noreferrer">
          <div>
            <BsGithub /> 
          </div>
        </a>
        <a href="https://codepen.io/asd1495" target='_blank' rel="noopener noreferrer">
          <div>
            <FaCodepen />
          </div>
        </a>
    </div>
  )
}

export default SocialMedia
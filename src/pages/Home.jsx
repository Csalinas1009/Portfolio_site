import React from 'react'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Tooltip } from '@mui/material';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I'm Christian Salinas</h2>
        <div className='prompt'>
          <p className='hoverSocials'>Junior Developer with a passion for learning <Tooltip title='click on my socials to find out more!' >🚀</Tooltip> </p>
          <a href='https://www.instagram.com/c.salinas90/'><Instagram /></a>
          <a href='https://github.com/Csalinas1009'><GitHub /></a>
          <a href='https://linkedin.com/in/christiansalinas09'><LinkedIn /></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, ViteJs, HTML, CSS, NPM, BootStrap, MaterialUI</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJs, ExpressJs, MySQL, MongoDB, PostgreSQL </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
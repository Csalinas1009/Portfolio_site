import React from 'react'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I'm Christian</h2>
        <div className='prompt'>
          <p>Junior Developer with a passion for learning</p>
          <Instagram />
          <GitHub/>
          <LinkedIn/>
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
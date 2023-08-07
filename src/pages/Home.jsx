import React from 'react'
import { Tooltip } from '@mui/material';
import '../styles/Home.css'
import CssIcon from '@mui/icons-material/Css';
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import TerminalIcon from '@mui/icons-material/Terminal';


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I'm Christian Salinas</h2>
        <div className='prompt'>
          <p className='hoverSocials'>Junior Developer with a passion for learning <Tooltip title='click on my socials to learn more!' >🚀</Tooltip> </p>
          <HtmlIcon />
          <JavascriptIcon />
          <CssIcon />
          <CodeIcon />
          <TerminalIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, BootStrap</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJs, ExpressJs, MySQL, MongoDB, PostgreSQL </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
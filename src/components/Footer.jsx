import React from 'react'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.instagram.com/c.salinas90/'><Instagram/></a>
            <a href='https://github.com/Csalinas1009'><GitHub/></a>
            <a href='https://linkedin.com/in/christiansalinas09'><LinkedIn/></a>
        </div>
        <p> &copy; 2023 Christian Salinas</p>
    </div>
  )
}

export default Footer
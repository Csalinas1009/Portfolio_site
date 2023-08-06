import React from 'react'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div>
            <Instagram />
            <GitHub/>
            <LinkedIn/>
        </div>
        <p> &copy; 2023 Christian Salinas</p>
    </div>
  )
}

export default Footer
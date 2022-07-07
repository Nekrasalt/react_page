import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiYoutube } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { TbBrandTinder } from 'react-icons/tb'

const headerSocials = () => {
    return (
        <div className='headerSocials'>
            <a href="https://www.linkedin.com/in/kuldeep-sethiya-a222b71b2/" target='_blank'><FiLinkedin /></a>
            <a href="https://twitter.com/KuldeepSethiya" target='_blank'><FiTwitter /></a>
            <a href="https://www.youtube.com/channel/UC3DoVxfPBqxyrjI8Abw6aWQ" target='_blank'><FiYoutube /></a>
            <a href="https://www.instagram.com/nekrasalt/" target='_blank'><FiInstagram /></a>
            <a href="https://tinder.com" target='_blank'><TbBrandTinder /></a>
        </div >
    )
}

export default headerSocials
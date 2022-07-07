import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiYoutube } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { TbBrandTinder } from 'react-icons/tb'

const headerSocials = () => {
    return (
        <div className='headerSocials'>
            <a href="https://linkedin.com" target='_blank'><FiLinkedin /></a>
            <a href="https://twitter.com" target='_blank'><FiTwitter /></a>
            <a href="https://youtube.com" target='_blank'><FiYoutube /></a>
            <a href="https://instagram.com" target='_blank'><FiInstagram /></a>
            <a href="https://tinder.com" target='_blank'><TbBrandTinder /></a>
        </div >
    )
}

export default headerSocials
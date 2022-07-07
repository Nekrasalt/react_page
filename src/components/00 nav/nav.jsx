import React from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { BsBookmarkStar } from 'react-icons/bs'
import { TbMessages } from 'react-icons/tb'
import { MdOutlineDesignServices } from 'react-icons/md'

import './nav.css'

const nav = () => {
    // const [ActiveNav, SetActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" /* onClick={() => SetActiveNav('#')} classnName={ActiveNav === '#' ? 'active' : ''}  */><BiHomeAlt /></a>
            <a href="#about" /* onClick={() => SetActiveNav('#about')} classnName={ActiveNav === '#about' ? 'active' : ''} */><CgProfile /></a>
            <a href="#contact"/*  onClick={() => SetActiveNav('#contact')} classnName={ActiveNav === '#contact' ? 'active' : ''} */><TbMessages /></a>
            <a href="#services" /* onClick={() => SetActiveNav('#services')} classnName={ActiveNav === '#services' ? 'active' : ''} */><MdOutlineDesignServices /></a>
            <a href="#testimonials" /* onClick={() => SetActiveNav('#testimonials')} classnName={ActiveNav === '#testimonials' ? 'active' : ''} */><BsBookmarkStar /></a>
        </nav>
    )
}

export default nav
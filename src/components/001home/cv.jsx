import React from 'react'
import CV from '../../assets/Copy.pdf'

const cv = () => {
    return (
        <div className="cvap cta">
            <a href={CV} download className='btn btn_down'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default cv
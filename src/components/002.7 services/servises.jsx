import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import './servises.css'

const servises = () => {
    return (
        <section id='services'>
            <h5>What I Provide</h5>
            <h2>Services</h2>
            <div className="container container_services">
                <article className='service'>
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service_list">
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Web Pages</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />On Page SEO's</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Website Optimization</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Summoning Jutsu</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Sage Art</li>
                    </ul>
                </article> {/* article service Web development */}

                <article className='service'>
                    <div className="service_head">
                        <h3>UI/UX Designing</h3>
                    </div>
                    <ul className="service_list">
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Web Designing</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />App Designing</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Color Grading</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Adobe XD</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Figma</li>
                    </ul>
                </article> {/* article service UI/UX designing */}

                <article className='service'>
                    <div className="service_head">
                        <h3>Hokage Raikage</h3>
                    </div>
                    <ul className="service_list">
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Weed Energy</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Smoke</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Pishach</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Rinnegan</li>
                        <li><IoMdCheckmarkCircleOutline className='service_icon' />Tensegan</li>
                    </ul>
                </article> {/* article service Hokage */}
            </div>{/* container_services */}
        </section>
    )
}

export default servises
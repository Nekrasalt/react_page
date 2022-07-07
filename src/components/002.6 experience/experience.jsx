import React from 'react'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import './experience.css'

const experience = () => {
    return (
        <section id='experience'>
            <h5>What I Know</h5>
            <h2>Experienced in</h2>
            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_detail">
                            <IoMdCheckmarkCircle className='experience_details_icon' />
                            <div className="experience_text">
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_detail">
                            <IoMdCheckmarkCircle className='experience_details_icon' />
                            <div className="experience_text">
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_detail">
                            <IoMdCheckmarkCircle className='experience_details_icon' />
                            <div className="experience_text">
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_detail">
                            <IoMdCheckmarkCircle className='experience_details_icon' />
                            <div className="experience_text">
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_detail">
                            <IoMdCheckmarkCircle className='experience_details_icon' />
                            <div className="experience_text">
                                <h4>BootStrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_detail">
                            <IoMdCheckmarkCircle className='experience_details_icon' />
                            <div className="experience_text">
                                <h4>Tailwind CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>{/* experience_content */}
                </div>{/* experience_frontend */}


                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_detail">
                            <IoMdCheckmarkCircle className='experience_details_icon' />
                            <div className="experience_text">
                                <h4>NodeJs</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_detail">
                            <IoMdCheckmarkCircle className='experience_details_icon' />
                            <div className="experience_text">
                                <h4>MySQL</h4>
                                <small className='text-light'>Noob</small>
                            </div>
                        </article>
                        <article className="experience_detail">
                            <IoMdCheckmarkCircle className='experience_details_icon' />
                            <div className="experience_text">
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>{/* experience_content */}
                </div>{/* experience_backend */}


            </div>{/* experience_container */}
        </section>
    )
}

export default experience
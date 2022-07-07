import React from 'react'
import Me from '../../assets/Profile Testimonials/kul.png'
import { RiMedal2Line } from 'react-icons/ri'
import { BsPeopleFill } from 'react-icons/bs'
import { BiGitPullRequest } from 'react-icons/bi'
import './about.css'

const about = () => {
    return (
        <section id='about'>
            <h2>About Me</h2>
            <div className="container container_about">
                <div className="about_me image">
                    <div className="about_me_image">
                        <img src={Me} alt="My img" srcset="" className='img' />
                    </div>
                </div>{/* about_me */}
                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <RiMedal2Line className='about_icon' />
                            <h5>Experience</h5>
                            <small>1+ Year</small>
                        </article>
                        <article className='about_card'>
                            <BsPeopleFill className='about_icon' />
                            <h5>Clients</h5>
                            <small>0+ Clients</small>
                        </article>
                        <article className='about_card'>
                            <BiGitPullRequest className='about_icon' />
                            <h5>Projects</h5>
                            <small>10+ Projects</small>
                        </article>
                    </div>{/* about_cards */}
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos deleniti ipsum quod sint, eius minima ullam nostrum? Sint, veniam! Repellat nam fuga rerum optio expedita quibusdam sapiente, labore odio culpa iusto. Sit sequi at neque aliquid earum est consequatur. Exercitationem quisquam nobis porro doloribus voluptate eum!</p>
                    <a href="mailto:bpand345@gmail.com" className='btn btn-primary'>Let's Talk</a>
                </div>{/* about_content */}
            </div>{/* end container */}
        </section>
    )
}

export default about
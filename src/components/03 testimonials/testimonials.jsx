import React from 'react'
import Smile from '../../assets/Profile Testimonials/smile.png'
import Holy from '../../assets/Profile Testimonials/holy.png'
import Six from '../../assets/Profile Testimonials/6.jpg'

import './testimonials.css';

const testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>My so called Team</h5>
            <h2>Testimonials</h2>
            <div className="container testimonial_container">

                <article className="testimonial">
                    <div className="client_img">
                        <img src={Smile} alt="smile photo" />
                    </div>
                    <h5 className="client_name">Smile K</h5>
                    <small className="review">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, sunt. Nisi autem exercitationem dolores iste natus dolorem incidunt velit obcaecati quia quisquam cupiditate rem, iure rerum corporis pariatur quas aperiam.
                    </small>
                </article>{/* testimonial */}

                <article className="testimonial">
                    <div className="client_img">
                        <img src={Holy} alt="" />
                    </div>
                    <h5 className="client_name">Holy Nigga</h5>
                    <small className="review">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, sunt. Nisi autem exercitationem dolores iste natus dolorem incidunt velit obcaecati quia quisquam cupiditate rem, iure rerum corporis pariatur quas aperiam.
                    </small>
                </article>{/* testimonial */}

                <article className="testimonial">
                    <div className="client_img">
                        <img src={Six} alt="" />
                    </div>
                    <h5 className="client_name">No Idea</h5>
                    <small className="review">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, sunt. Nisi autem exercitationem dolores iste natus dolorem incidunt velit obcaecati quia quisquam cupiditate rem, iure rerum corporis pariatur quas aperiam.
                    </small>
                </article>{/* testimonial */}

            </div>{/* testimonial_container */}
        </section>
    )
}

export default testimonials
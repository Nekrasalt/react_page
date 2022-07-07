import React from 'react'
import ImgOne from '../../assets/Works/1.webp'
import ImgTwo from '../../assets/Works/2.webp'
import ImgThree from '../../assets/Works/3.webp'
import ImgFour from '../../assets/Works/4.webp'
import ImgFive from '../../assets/Works/5.webp'
import ImgSix from '../../assets/Works/6.webp'
import './contact.css'

const contact = () => {
    return (
        <section id='contact'>
            <h5>My Recent</h5>
            <h2>Works</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <h3>This is a Portfolio Title</h3>
                    <a href="https://github.com/Nekrasalt" className='btn' target='_blank'>GitHub</a>
                    <a href="https://github.com/Nekrasalt" className='btn btn-primary' target='_blank'>Live Demo</a>
                    <div className="portfolio_item_image">
                        <img src={ImgOne} alt="" />
                    </div>
                </article>{/* portfolio_item */}
                <article className="portfolio_item">
                    <h3>This is a Portfolio Title</h3>
                    <a href="https://github.com/Nekrasalt" className='btn' target='_blank'>GitHub</a>
                    <a href="https://github.com/Nekrasalt" className='btn btn-primary' target='_blank'>Live Demo</a>
                    <div className="portfolio_item_image">
                        <img src={ImgTwo} alt="" />
                    </div>
                </article>{/* portfolio_item */}
                <article className="portfolio_item">
                    <h3>This is a Portfolio Title</h3>
                    <a href="https://github.com/Nekrasalt" className='btn' target='_blank'>GitHub</a>
                    <a href="https://github.com/Nekrasalt" className='btn btn-primary' target='_blank'>Live Demo</a>
                    <div className="portfolio_item_image">
                        <img src={ImgThree} alt="" />
                    </div>
                </article>{/* portfolio_item */}
                <article className="portfolio_item">
                    <h3>This is a Portfolio Title</h3>
                    <a href="https://github.com/Nekrasalt" className='btn' target='_blank'>GitHub</a>
                    <a href="https://github.com/Nekrasalt" className='btn btn-primary' target='_blank'>Live Demo</a>
                    <div className="portfolio_item_image">
                        <img src={ImgFour} alt="" />
                    </div>
                </article>{/* portfolio_item */}
                <article className="portfolio_item">
                    <h3>This is a Portfolio Title</h3>
                    <a href="https://github.com/Nekrasalt" className='btn' target='_blank'>GitHub</a>
                    <a href="https://github.com/Nekrasalt" className='btn btn-primary' target='_blank'>Live Demo</a>
                    <div className="portfolio_item_image">
                        <img src={ImgFive} alt="" />
                    </div>
                </article>{/* portfolio_item */}
                <article className="portfolio_item">
                    <h3>This is a Portfolio Title</h3>
                    <a href="https://github.com/Nekrasalt" className='btn' target='_blank'>GitHub</a>
                    <a href="https://github.com/Nekrasalt" className='btn btn-primary' target='_blank'>Live Demo</a>
                    <div className="portfolio_item_image">
                        <img src={ImgSix} alt="" />
                    </div>
                </article>{/* portfolio_item */}
            </div>{/* portfolio_container */}
        </section>
    )
}

export default contact

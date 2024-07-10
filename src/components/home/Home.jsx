import React from 'react'

import './Home.css'

import {ReactComponent as Medal} from '../../assets/medal.svg'
import {ReactComponent as Experience} from '../../assets/experience.svg'
import {ReactComponent as Personal} from '../../assets/personal.svg'
import {ReactComponent as Star} from '../../assets/star.svg'


import testimonialImage from '../../assets/testimonial-man-1.jpg';
import groupReviewImage from '../../assets/groupreview.png';



function Home() {
  return (
    <div className='home'>
        <div className='home__leftSection'>
            <h1>
            Expert Tax < br />Consultancy Services < br/> for Your Needs
            </h1>
            <p>Get personilzed tax planning, ITR filing, and capital
            gains tax services to optimize your financial situation.</p>

            <div>
                <div className='home__iconContainer'>
                    <Medal className='home__icon'/>
                    <h3>Highly qualified professionals</h3>
                </div>

                <div className='home__iconContainer'>
                    <Experience className='home__icon'/>
                    <h3>10+ Years of experience</h3>
                </div>
                <div className='home__iconContainer'>
                    <Personal className='home__icon'/>
                    <h3>One to One assistance</h3>
                </div>
            </div>

                <a href='#'className='home__leftButton' >
                  Get Personalized Advice
                </a>

        </div>


        <div className='home__rightSection'>
                <img src={testimonialImage} className='home__testimonial-image' alt='testimonial' ></img>       

            <div className='home__testimonial-text'>
                <div className='home__starGroup'>
                    <Star className='home__star'/>
                    <Star className='home__star'/>
                    <Star className='home__star'/>
                    <Star className='home__star'/>
                    <Star className='home__star'/>
                </div>

                <p>"What sets this firm apart is their commitment to quality. Every detail was meticulously handled, and they were      always available to answer my questions. It's not just a service; it's a partnership."   Mohan Rao., Corporate Executive</p>

            </div>
            <div className='home__reviewButtonWrapper'>
                <img src={groupReviewImage} className='home__groupReviewImage' alt='group review'></img>
                <a href='#testimonials' className='home__rightButton' >More Reviews</a>
            </div>
        </div>       

    </div>
  )
}

export default Home

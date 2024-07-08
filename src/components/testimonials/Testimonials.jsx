import {useState, React} from 'react'
import './Testimonials.css'

import {ReactComponent as Star} from '../../assets/star.svg'
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'
import {ReactComponent as ArrowRight} from '../../assets/arrow-right.svg'


import testimonialsData from './data';


function Testimonials() {

    const testimonials = testimonialsData;
    const length = testimonials.length ;


    const [testimonialIndex, SetTestimonialIndex] = useState(0);

    function nextTestimonialHandler(){

        testimonialIndex < (length-1)? SetTestimonialIndex(prevIndex=>prevIndex+1): SetTestimonialIndex(0);
        
    }

    function previousTestimonialHandler(){

        testimonialIndex === 0? SetTestimonialIndex(length-1) : SetTestimonialIndex(prevIndex=>prevIndex-1);

    }


  return (
    <div className='testimonials' id='testimonials'>
        <ArrowLeft className='testimonials__arrowLeft' onClick={previousTestimonialHandler}/>
        <ArrowRight className='testimonials__arrowRight' onClick={nextTestimonialHandler}/>

        <h1 className='testimonials__title'>Customer Testimonials</h1>
        <div className='testimonials__cardWrapper'  >
            <div className='testimonials__cardInnerWrapper'style={{translate:`${(-testimonialIndex*(100/length))}%`}}>
                {testimonials.map((testimonial, index) =>
                    <div className='testimonials__card' key={index} >

                        <img src={testimonial.image} className='testimonials__image' alt='testimonial' ></img>       

                    <div className='testimonials__text'>
                        <div className='testimonials__starGroup'>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                        </div>

                        <p >{testimonial.review}</p>

                    </div>
                </div>)}
            </div>
        </div>    


       
    </div>
  )
}

export default Testimonials


/*

         <div className='testimonials__cardWrapper'  >
            <div className='testimonials__cardInnerWrapper'style={{translate:`${(-33.33)}%`}}>
                <div className='testimonials__card' >

                        <img src={testimonialImage} className='testimonials__image' alt='testimonial' ></img>       

                    <div className='testimonials__text'>
                        <div className='testimonials__starGroup'>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                        </div>

                        <p >"1What sets this firm apart is their commitment to quality. Every detail was meticulously handled, and they were      always available to answer my questions. It's not just a service; it's a partnership."   <br /><br />Mohan Rao., Corporate Executive</p>

                    </div>
                </div>

                <div className='testimonials__card'>

                        <img src={testimonialImage} className='testimonials__image' alt='testimonial' ></img>       

                    <div className='testimonials__text'>
                        <div className='testimonials__starGroup'>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                        </div>

                        <p>"2What sets this firm apart is their commitment to quality. Every detail was meticulously handled, and they were      always available to answer my questions. It's not just a service; it's a partnership."   <br /><br />Mohan Rao., Corporate Executive</p>

                    </div>
                </div>    

                <div className='testimonials__card'>

                        <img src={testimonialImage} className='testimonials__image' alt='testimonial' ></img>       

                    <div className='testimonials__text'>
                        <div className='testimonials__starGroup'>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                            <Star className='testimonials__star'/>
                        </div>

                        <p>"3What sets this firm apart is their commitment to quality. Every detail was meticulously handled, and they were      always available to answer my questions. It's not just a service; it's a partnership."   <br /><br />Mohan Rao., Corporate Executive</p>

                    </div>
                </div>

            </div>
        </div>    


*/
import React from 'react'
import './Services.css'

function Services() {
  return (
    <div className='services' id='services'>
        <div className='services__title'>
            <h1>SERVICES   </h1>
        </div>

        <div className='services__paraWrapper'>
            <div className='services__para'>
                <h3>ITR Filing for <br />Individuals and Businesses</h3>
                <p>Our tax consultancy offers comprehensive 
                services including tax planning, filing ITR, 
                and capital gains tax assistance.
                </p>    
            </div>
            <div className='services__para'>
                <h3>Capital Gains Tax <br />
                Advisory for Investments</h3>
                <p>We provide expert guidance on capital gains tax implications to help you optimize your investment returns.</p>
            </div>
            <div className='services__para'>
                <h3>Personalized Tax Planning <br />
                 for Individuals and Businesses</h3>
                <p>Our experienced team develops personalized tax 
                planning strategies to minimize your tax liabilities and maximize savings.</p>
            </div>

        </div>

            {/*<a href='#' className='services__button'>Find out more</a>*/}

        <div className='services__background'></div>


    </div>
  )
}

export default Services
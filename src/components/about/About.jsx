import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about' id='about'>
        <div className='about__leftSection'>
            <h1> Expert Tax Consultancy <br />  Services for Efficient Tax <br /> Planning and Filing</h1>
            <p> Welcome to “Company Name”, where we provide <br /> expert tax consultancy services tailored to meet <br />your unique needs. <br /> <br />

                Our mission is to simplify the complexities of taxation, <br /> ensuring our clients achieve maximum efficiency and <br /> compliance.
            </p>
        </div>

        <div className='about__rightSection'>
            <div className='about__rightSection-para'>
                <h3>EXPERT ASSISTANCE</h3>
                <p>We are a team of seasoned tax professionals with specialized  knowledge</p>
            </div>
            <div className='about__rightSection-para'>
                <h3>Ongoing Support</h3>
                <p>Our core belief: Your financial success deserves attention 365 days a year, not just at tax time.</p>
              </div>
              <div className='about__rightSection-para'>
                <h3>TRANSPARENCY</h3>
                <p>Transparent policies, pricing and customizable plans for honest, cost-effective services.</p>
              </div>

        </div>
    </div>
  )
}

export default About
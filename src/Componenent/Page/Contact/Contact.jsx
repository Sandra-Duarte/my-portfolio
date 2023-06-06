import React from 'react'
import "./Contact.scss"
import {GrInstagram} from "react-icons/gr"

const Contact = () => {
  return (
    <section id="contact" className='contact section container'> Contact Component
    <div className='sectionTitle'>
      <span className='titleNumber'>04</span>
      <h5 className='titleText'>Contact.
      <div className='underline'><span></span>
      </div>
      </h5>
      <div className='contactContainer grid'>
        <div className='socialContacts grid'>
          <h3>Talk to me</h3>
          <div className='cards grid'>
            <div className='card'>
              <div>
                <GrInstagram className='icon instaIcon'/>
              </div>
              <h4>Instgram</h4>
              <span className='userName'>sandratduarte</span>
              <div>
                <a href='https://www.instagram.com/sandratduarte/' className='flex'></a>Send Menssage
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
    </section>
  )
}

export default Contact
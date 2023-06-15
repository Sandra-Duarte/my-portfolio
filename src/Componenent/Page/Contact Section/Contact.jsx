import React, { useRef } from 'react';
import "./Contact.scss";
import { GrInstagram } from "react-icons/gr";
import { TbArrowBigRightLines } from "react-icons/tb";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_ixtj1lj', 'sandjesus19@gmail.com', form.current, 'LmlgwrVHn1NrI41S3')
    e.target.reset()

  };




  return (
    <section id="contact" className='contact section container'>
      <div className='sectionTitle'>
        <span className='titleNumber'>04</span>
        <h5 className='titleText'>
          Contact.
          <div className='underline'><span></span></div>
        </h5>
      </div>
      <div className='contactContainer grid'>
        <div className='socialContacts grid'>
          <h3>Talk to me</h3>
          <div className='cards grid'>
            <div className='card'>
              <div>
                <GrInstagram className='icon instaIcon' />
              </div>
              <h4>Instagram</h4>
              <span className='userName'>@sandratduarte</span>
              <div>
                <a href='https://www.instagram.com/sandratduarte/' className='flex'>
                  Message Send
                  <TbArrowBigRightLines className='icon' />
                </a>
              </div>
            </div>
            <div className='card'>
              <div>
                <AiFillLinkedin className='icon instaIcon' />
              </div>
              <h4>LinkedIn</h4>
              <span className='userName'>@Sandra Duarte</span>
              <div>
                <a href='https://www.linkedin.com/in/sandra-duarte-b0b1719a/' className='flex' target='_blank' rel='noopener noreferrer'>
                  Message Send
                  <TbArrowBigRightLines className='icon' />
                </a>
              </div>
            </div>
            <div className='card'>
              <div>
                <BsTwitter className='icon instaIcon' />
              </div>
              <h4>Twitter</h4>
              <span className='userName'>@Sandra Duarte</span>
              <div>
                <a href="https://twitter.com/sandrad48238244/" className='flex'>
                  Message Send
                  <TbArrowBigRightLines className='icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='form grid'>
          <h3>Send me an Email</h3>
          <form  ref={form}onSubmit={sendEmail}>
            <input type='text' placeholder='Enter Your Name' name='name' />
            <input type='email' placeholder='Enter Your Email' name='email' />
            <textarea placeholder='Enter Your Message'></textarea>
            <button className="formBtn" type="submit" name="submit">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

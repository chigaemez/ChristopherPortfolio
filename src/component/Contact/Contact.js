import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa';
import './Contact.css'

const Contact = ( {contactsection}) => {


    const form = useRef()



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_94bax8b', 'template_i609mod', form.current, '9ptRwCFAvx_VjdFVJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()

            

    };


    return (
        <div className='bg-dark' id ='Contact' ref={contactsection}>
            

            <div className="container bg-dark contact-us">
            <header className='header'>Contact Us</header>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form container bg-dark">
                        <div className="form-control bg-dark"> 
                            <input type="text"
                                placeholder='Full Name' name='user_name' className='bg-dark' />
                            <input type="number" name='user_number' placeholder='Phone Number' className='bg-dark' required />
                            <input type="text" name='user_email' placeholder='Valid Email' className='bg-dark' required />
                            <input type="text" name='user_subject' placeholder='Subject' className='bg-dark' required />
                        </div>


                        <div className="text-area">
                            <textarea name="user_message" id="" cols="30" rows="10" placeholder='Please Discribe Shortly on your Project' required></textarea>
                            <input type="submit" value="Contact Me" className='btn btn-block' />

                            <a href="https://www.facebook.com/kulture.darlington" target={'_blank'}><FaFacebook /></a>
                            <a href="https://twitter.com/Czarchr60510123?t=7cC4kSbzjvRGzLMXaDYP4g&s=09" target={'_blank'}><FaTwitter /></a>
                            <div className="call">
                            <FaPhone  className='telephone'/>
                            <a className='tele' href="tel:+2349122174699"> +2349122174699</a>
                            </div>
                        </div>

                    </div>


                </form>

            </div>

        </div>
    )
}

export default Contact

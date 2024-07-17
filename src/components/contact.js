import React from 'react'
import "./page4.css"

export default function Contact(){
    return(
        <div className='pagefour'>
            <div className='pagefour--sectionone'>
                <div className='sectionfour_items'>
                    <div className='sectionfour_txt'>
                        <p>Get in touch</p>
                        <p>We would love to hear from you. Whether you have questions, want to collaborate, or need more information about MariTest, please reach out to us.</p>
                    </div>
                    <div className='contact_us'>
                        <div className='name_cont'>
                            <input placeholder='name' className='name'/>
                            <input placeholder='email' className='name'/>
                        </div>
                        <div className='button'>
                            <input placeholder='leave a message' className='message'/>
                            <button className='contact'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='icons-background'>
            <   img src='./image/together.png' className='together-img2'></img>
                <img src='./image/thin-line.png' className='thin'></img>
                <div className='footer'>
                    <p>©2024 MariTest Africa. All rights reserved.</p>
                    <div className='privacy'>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
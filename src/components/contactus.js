import React from 'react'
import "./contactus.css"

export default function Contactus(){
    return(
            <div className='reusable-contact'>
                <div className='contact_section'>
                    <div className='inner-sec'>
                        <div className='contacts-list'>
                            <h1 className='support'>Support</h1>
                            <h1 className='support'>Partner</h1>
                            <h1 className='support'>Join</h1>
                            <h1 className='contact-color'>Contact Us</h1>
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
                    <div className='togetherr'>
                        <img src='./image/together.png' className='together-img2'></img>
                        <img src='./image/thin-line.png' className='thin'></img>
                        <div className='footer'>
                            <p>©2024 MariTest Africa. All rights reserved.</p>
                            <div className='privacy'>
                                <p>Privacy Policy</p>
                                <p>Terms and Conditions</p>
                            </div>
                        </div>
                    </div>
                <div className='togetherr'>
                </div>
            </div>
    )
}
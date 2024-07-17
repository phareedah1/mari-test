import React from 'react'
import "./contactus.css"

export default function Contactus(){
    return(
        <div>
            <div className='contact_section'>
                <div className='inner-sec'>
                    <div>
                        <h3>Support</h3>
                        <h3>Partner</h3>
                        <h3>Join</h3>
                        <h3>Contact Us</h3>
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
        </div>
    )
}
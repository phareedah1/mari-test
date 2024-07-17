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
            <div className='pagefour--sectiontwo'>
                <img src='./image/together.png' className='together'></img>
                {/* <p>maritest</p>
                <div>
                    <img src='./image/in.png'></img>
                    <img src='./image/insta.png'></img>
                    <img src='./image/mail.png'></img>
                    <img src='./image/footer.png'></img>
                </div> */}
            </div>
            <div className='pagefour--sectionthree'>
            <i class="fa fa-copyright" aria-hidden="true"></i>
            <p>@something</p>
            </div>
        </div>
    )
}
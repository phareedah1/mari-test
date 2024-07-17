import React from 'react'
import "./page3.css"

export default function Team(){
    return(
        <div>
            <div className='header'></div>
            <div>
                <p>TEAM MARITEST</p>
                <p>Founding Team</p>
            </div>
            <div className='people'>
                <div className='firstline'>
                    <div>
                        <img src='./image/person1.png'></img>
                        <p>Hakim Kakooza</p>
                        <p>Founder & CEO</p>
                    </div>
                    <div>
                        <img src='./image/person2.png'></img>
                        <p>Stanley Kinyanjui</p>
                        <p>Co-founder & CFO</p>
                    </div>
                    <div>
                        <img src='./image/person3.png'></img>
                        <p>Delight Asaph</p>
                        <p>Product Designer & COO</p>
                    </div>
                </div>
                <div className='firstline'>
                    <div>
                        <img src='./image/person4.png'></img>
                        <p>Hamza Dhabuliwo</p>
                        <p>Chief Medical Officer</p>
                    </div>
                    <div>
                        <img src='./image/person5.png'></img>
                        <p>Tinashe Ngwenya, PhD.</p>
                        <p>Business Development Lead</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <p>Team MARITEST</p>
                    <p>Advisory Board</p>
                </div>
                <div className='secondline'>
                    <div>
                        <img src='./image/person6.png'></img>
                        <p>Koki Ajiri</p>
                        <p>Associate Consultant, Bain & Company</p>
                    </div>
                    <div>
                        <img src='./image/person7.png'></img>
                        <p>Dr. Anne Kerubo</p>
                        <p>Researcher & Project Manager, Global Malaria Project, AMREF</p>
                    </div>
                    <div>
                        <img src='./image/person8.png'></img>
                        <p>Maudo Jallow</p>
                        <p>Ex-BCG & United Nations | Visiting Fellow at London School of Economics</p>
                    </div>
                    <div>
                        <img src='./image/person9.png'></img>
                        <p>Dr. Anne Kerubo</p>
                        <p>Chairperson and Country Lead, Kenya Malaria Youth Corp</p>
                    </div>
                </div>
            </div>

            <div>
                {/* <div className='contact_section'>
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
                <div className='together'>
                        <img src='./image/together.png' className='together-img'></img>
                </div> */}
            </div>
        </div>
    )
}
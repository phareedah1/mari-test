import React from 'react'
import Contactus from "./contactus"

export default function Home(){
    return(
        <div className='section--one'>
            <div className='background'>
                <div className='sectionone_content'>
                    <img src ="./image/herotxt.png" className='hero_txt'></img>
                    <p className='innovate'>Innovative, bloodless, automated, and rapid diagnosis and prescription for a healthier tomorrow</p>
                    <div className='joinus'>
                        <button className='join'>Join the fight</button>
                        <p className='learn'>Learn More</p>
                    </div>
                </div>
            </div>
            <img src='./image/design.png' className='design'></img>

            <div className='pageone--sectiontwo'>
                <div className='rationale'>
                    <p className='rationale-txt'>Our rationale</p>
                    <p className='whyy'>Why we do what we do</p>
                    <p>Malaria remains a leading cause of illness and death in many countries. Over 200 million cases are reported annually, with the majority (94%) being in sub-Saharan Africa. As a result, 95% of Malaria deaths occur in the region. </p>
                    <p>Children under five are particularly vulnerable, with one child dying every two minutes from malaria. These are not just statistics – they are real lives, real families, and real futures at stake</p>
                    <p className='source-txt'>Source: World Malaria Report 2023 by WHO</p>
                </div>
                <div className='image2'>
                    <img src='./image/children.png' className='children'></img>
                    <div className='stats'>
                        <div className='stats-cont'>
                            <p className='stats-num'>249M</p>
                            <p className='malaria'>Malaria cases globally in 2022</p>
                        </div>
                        <div className='stats-cont'>
                            <p className='stats-num'>608k</p>
                            <p className='malaria'>Malaria deaths in 2022</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pageone--sectionthree'>
                <div className='element-cont'>
                    <img src ='./image/element.png'className='element'></img>
                    <img src ='./image/element.png'className='element2'></img>
                </div>
                <div className='urgency'>
                    <h3 className='whyy'>The Urgency of Early Malaria Diagnosis</h3>
                    <p>Current diagnostic methods are often invasive, time-consuming, and inaccessible to those in remote areas.</p>
                    <p>According to the Malaria Journal, community-based early diagnosis and treatment are crucial in reducing malaria deaths. These methods prevent transmission, lower recurrence rates, and are cost-effective, especially in resource-limited settings. Furthermore, early diagnosis and treatment within 24-48 hours of fever onset significantly reduce parasite transmission, thereby preventing further infections. </p>
                    <p>This reality drives our unwavering commitment to developing a more effective, accessible, and non-invasive diagnostic tool. Our mission is to save lives and bring hope to communities burdened by malaria.</p>
                    <p className='source-txt'>Source: Malaria Journal</p>
                </div>
            </div>


            <div className='pageone--sectionfour'>
                <p className='whyy'>Our journey</p>
                <p>A timeline of MariTest’s development, highlighting the dedication and milestones reached</p>
                <div className='connect-scroll'>
                    <img src='./image/connect.png' className='connect'></img>
                </div>
            </div>

            <div className='pageone--sectionfive'>
                <p className='whyy'>Our Sponsors & Partners</p>
                <img src='./image/sponsors.png' className='connect2'></img>
            </div>

            <Contactus />
        </div>
    )
}
import React from 'react'
import "./page2.css"

export default function About(){
    return(
        <div>
            <div className='pagetwo_sectionone'>
                <img src='./image/ankara.png' className='ankara'></img>
                <div className='sectiononee_content'>
                    <div className='pagetwo_firsttxt'>
                        <p>ABOUT MARITEST</p>
                        <p>Our Mission</p>
                        <p>At MariTest, our mission is to revolutionize malaria diagnosis and treatment in sub-Saharan Africa. We strive to create innovative, accessible, and non-invasive diagnostic tools that save lives and bring hope to communities burdened by malaria. We are committed to eradicating this devastating disease through advanced technology, real-time monitoring, and community-driven solutions.</p>
                    </div>
                    <div>
                        <img src='./image/children2.png' className='children-2'></img>
                    </div>
                </div>
            </div>

            <div className='pagetwo_sectiontwo'>
                <div className='teammaritest'>
                    <div>
                        <img src='./image/man.png' className='man'></img>
                    </div>
                    <div className='story'>
                        <p className='rationale-txt'>TEAM MARITEST</p>
                        <p className='why'>Our Story</p>
                        <p>In 2021, an unexpected encounter changed our founder Kakooza Hakim's life that sparked the creation of MariTest. While interning on the remote Bussi Island in Uganda, Kakooza experienced a severe bout of fever. Despite having faced fever before, this time was different and much worse.</p>
                        <p>One morning, Kakooza felt the familiar signs of malaria. But by this time, the fever had escalated. He went to a local healthcare center, only to wait three grueling hours and be told that they had run out of Malaria Rapid Diagnostic Test kits (RDTs) and antimalarial drugs. With COVID-19 lockdowns in place, he was stuck on the island with few options.</p>
                        <p>Desperate, Kakooza turned to local remedies to manage his fever. His condition worsened, but luckily, a special travel permit allowed him to reach a private hospital on the mainland. By then, the parasites had severely damaged his liver, bringing him close to death.</p>
                    </div>
                </div>
                <div className='teammaritest2'>
                    <div className='story2'>
                        <p>During his recovery, Kakooza reflected on the harsh reality faced by those without access to adequate healthcare. Malaria is a massive burden in Africa, infecting 241 million people and killing over half a million in 2020 alone. Every 75 seconds, a child under five died from the disease. The major issues were limited access to early diagnosis and treatment, poor vector control, lack of medical facilities, and a shortage of healthcare workers.</p>
                        <p>Determined to make a difference, Kakooza, leveraging his machine learning expertise from Fundi Bots Uganda and entrepreneurial skills from the African Leadership University, teamed up with four other amazing individuals with diverse skills but on a shared mission to fight malaria in sub-Saharan Africa. MariTest was created. </p>
                        <p>MariTest is a reusable, non-invasive, automated diagnostic and prescription device that was designed to bridge the gap in malaria diagnosis and treatment, embodying the team's commitment to a malaria-free future</p>
                    </div>
                    <div className='semicircle'>
                        <img src='./image/semicircle.png'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
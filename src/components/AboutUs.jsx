import * as BiIcons from "react-icons/bi"

import React from "react";

function AboutUs () {

    return (
        <>
            <section className='aboutUs'>
                <div className='info-box-first-bar'>
                    <BiIcons.BiPaperPlane className='biPaperPlane'/>
                    <h2>Rejsy morskie do okoła świata</h2>
                    <p>Od ponad czterech lat pływam po wszystkich morzach i oceanach na świecie wraz z z naróżniejszymi załogami. Znajdziesz tutaj wyjazdy zarówno spokojne nastawione na ekslporację miast i życia podwodnego jak i wyjazdy typu Explore & Party! Już wkrótce dostpęne będą wyjażdy na kilka jachtów</p>
                </div>
                <div className='info-box-second-bar'>
                    <div className='info-box'>
                        <img className="info-box-img" src="src/assets/island.jpg" alt="Yacht on bay"/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className='info-box'>
                        <img className="info-box-img" src="src/assets/thailand.jpg" alt="Yacht on bay"/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className='info-box'>
                        <img className="info-box-img" src="src/assets/yacht.jpg" alt="Yacht on bay"/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
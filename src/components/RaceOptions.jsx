import React, {Component, useEffect, useState} from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as ImIcons from "react-icons/im";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import ImageSlider from "./ImageSlider";

function RaceOptions() {


const slides = [
    { url: "https://firebasestorage.googleapis.com/v0/b/yacht-page.appspot.com/o/E8D003B7015A36C553D2780CA76CD870.jpg?alt=media&token=aa6f9afe-26d3-47d5-97e0-dfb0df11e2cb"},
    { url: "https://firebasestorage.googleapis.com/v0/b/yacht-page.appspot.com/o/337772920_2155541421502222_4222971164438565013_n.jpg?alt=media&token=d4d13923-d634-4d3e-85b2-725d3e01ea6e"},
    { url: "https://firebasestorage.googleapis.com/v0/b/yacht-page.appspot.com/o/337650335_172206472358023_574449825887649535_n.jpg?alt=media&token=27c5482b-b9cf-4c90-94cc-a11241a00d75"}
];


    return (
        <div className='race-options-container'>

            <div className="container">

                <ImageSlider slides={slides}/>
            </div>

            {/*<div className="race-options-frame" >*/}
            {/*    <div className="carousel">*/}

            {/*            {images.map(({key, image}) => (*/}
            {/*                <div className="race-options-box" key={key}>*/}
            {/*                    <img className="race-options-img" src={image} alt="Sardynia"/>*/}
            {/*                </div>*/}
            {/*            ))}*/}

            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default RaceOptions;

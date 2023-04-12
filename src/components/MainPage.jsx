import Navbar from "./Navbar";
import PictureSection from "./PictureSection";
import AboutUs from "./AboutUs";
import RaceOptions from "./RaceOptions";
import JoinUs from "./JoinUs";
import Newsletter from "./Newsletter";
import Newtrips from "./Newtrips";
import React from "react";
import Footer from "./Footer";
import Movies from "./Movies";
import BackgroundView from "./BackgroundView";

function MainPage() {

    return (
        <>
            <Navbar/>
            <PictureSection/>
            <AboutUs/>
            <RaceOptions/>
            <BackgroundView/>
            <JoinUs/>-
            <Newsletter/>
            <Newtrips />
            <Movies />
            <Footer/>
        </>
    );
}

export default MainPage
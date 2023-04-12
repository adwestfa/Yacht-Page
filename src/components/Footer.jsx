import * as SiIcons from "react-icons/si"

import React from "react";
import * as GiIcons from "react-icons/gi";

function Footer () {

    return (
        <>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <GiIcons.GiShoonerSailboat className='globe-icon'/>
                    <div className="logo">Yacht trip</div>
                </div>

                <div className='instagram-footer'>
                    <a href='https://www.instagram.com/ad_westu/?hl=af' target="_blank">
                        <SiIcons.SiInstagram className='instagram-icon'/>
                        Instagram
                    </a>
                </div>
            </div>
        </>
    )

}

export default Footer
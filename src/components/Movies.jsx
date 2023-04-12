import {Container} from "react-bootstrap";

import React, {Component} from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';

function Movies() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <>
            <div className="movies-container">
                <h2 className="movies-header">Zobacz także filmy z ubiegłych wyjazdów!</h2>
                <Container>
                    <Slider {...settings}>

                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/9OdYz-5AiRY" title="YouTube video"
                                    allowFullScreen></iframe>
                        </div>
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/re3HAUG5CNU" title="YouTube video"
                                    allowFullScreen></iframe>
                        </div>

                    </Slider>
                </Container>
            </div>
        </>
    )
}

export default Movies
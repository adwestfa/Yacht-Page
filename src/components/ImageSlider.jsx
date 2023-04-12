import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import * as GrIcons from "react-icons/gr";


const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    // const [images, setImages] = useState([]);


    // useEffect(() => {
    //     getDocs(collection(db, "Image section")).then((querySnapshot) => {
    //         const imageSection = [];
    //
    //         querySnapshot.forEach((doc) => {
    //             imageSection.push({...doc.data(), key: doc.id});
    //         });
    //         setImages(imageSection);
    //     });
    // }, []);


    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="slider-container">
            <div className="left-arrow" onClick={goToPrevious}>
                <GrIcons.GrFormPrevious className='arrow-icon'/>
            </div>


            <div className="race-options-img" style={slideStyles}>
            </div>

            {/*{images.map(({key, image}) => (*/}
            {/*    <div className="race-options-box" key={key}>*/}
            {/*        <div className="race-options-img" style={{backgroundImage: `url(${image[currentIndex].url})`}}/>*/}
            {/*        /!*<img className="race-options-img" src={image} alt="Sardynia"/>*!/*/}
            {/*    </div>*/}
            {/*))}*/}


            <div className="right-arrow" onClick={goToNext}>
                <GrIcons.GrFormNext className='arrow-icon'/>
            </div>
            <div className="dots-container">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)}
                         className={currentIndex === slideIndex ? 'active-dot' : ''}
                    >⬤</div>
                ))}
            </div>
        </div>
    )

}
export default ImageSlider;

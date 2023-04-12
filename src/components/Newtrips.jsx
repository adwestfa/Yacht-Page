import * as ImIcons from "react-icons/im";
import React, {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";



function Newtrips() {

    const [trips, setTrips] = useState([]);
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [iconType, setIconType] = useState("Explore")

    // -----------------------------API Communication---------------------------

    useEffect(() => {
        getDocs(collection(db, "Trips")).then((querySnapshot) => {
            const tempTrips = [];

            querySnapshot.forEach((doc) => {
                tempTrips.push({...doc.data(), key: doc.id});
            });
            setTrips(tempTrips);
        });
    }, []);

    return (
        <>
            <div className="new-offer-container">
                <div>
                    {trips.map(
                        ({destination, date, description, type, key, image, price}) => (

                            <div className="new-offer-box" key={key} style={{backgroundImage: `url("${image}")`, backgroundSize: "cover"}}>
                                <div className="top-offer-bar">
                                    <div className="left-offer-bar">
                                        <h2>{destination}</h2>
                                        <div className="calendar">
                                            <ImIcons.ImCalendar className="calendar-icon"/>
                                            <p>{date}</p>
                                        </div>
                                    </div>

                                    <div className="right-offer-bar">
                                        <div className="right-offer-bar-price">
                                            <GrIcons.GrMoney className="money-icon"/>
                                            <p>{price} zł</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-offer-bar">
                                    <button onClick={() => setSelectedTrip(key)}>
                                        Zobacz szczegóły
                                    </button>
                                </div>

                                <div className="popup">
                                    {selectedTrip === key && (
                                        <div className="popup-box">
                                            <button className="popup-box-button"
                                                    onClick={() => setSelectedTrip(!selectedTrip)}>
                                                <AiIcons.AiOutlineCloseCircle className="popup-box-close-icon"/>
                                            </button>
                                            <div className="popup-box-destination">{destination}</div>
                                            <div className="popup-box-tripType">
                                                <p>Typ wyjazdu: {type}</p>
                                                {type === "Party" && <img className="tripType-image" src="src/assets/type-party.jpg" alt="Party"/>}
                                                {type === "Chill" && <img className="tripType-image" src="src/assets/type-chill.jpg" alt="Chill"/>}
                                            </div>

                                            <p>{description}</p>
                                            <p>Cena za osobę: {price} zł</p>

                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default Newtrips;

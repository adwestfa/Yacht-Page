import * as TbIcons from "react-icons/tb";
import React, { useState } from "react";

function JoinUs() {
    const [onHover, setOnHover] = useState(false);

    return (
        <>
            <div className="joinUs-container">
                <img
                    className="joinus-img"
                    src="src/assets/joinus1.JPG"
                    alt="Join us!"/>

                <div className='joinUs-container-boxes'>

                    <div className="joinUs-box">
                        <div className='join-us-description'>
                            <TbIcons.TbCircleNumber1 className='number-icon'/>
                            <p>
                                Wyszukaj interesujący Cię wyjazd.
                            </p>
                        </div>
                    </div>

                    <div className="joinUs-box">
                        <div className='join-us-description'>
                            <TbIcons.TbCircleNumber2 className='number-icon'/>
                            <p>
                                Wybierz się sam lub zgarnij swoich znajomych!
                            </p>
                        </div>
                    </div>

                    <div className="joinUs-box">
                        <div className='join-us-description'>
                            <TbIcons.TbCircleNumber3 className='number-icon'/>
                            <p>
                                Wpłać zaliczkę
                            </p>
                        </div>
                    </div>

                    <div className="joinUs-box">
                        <div className='join-us-description'>
                            <TbIcons.TbCircleNumber4 className='number-icon'/>
                            <p>
                                Baw się, eksploruj i zwiedzaj świat!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JoinUs;

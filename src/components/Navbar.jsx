import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import {NavLink} from "react-router-dom";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";


function Navbar() {
    // const [sidebar, setSidebar] = useState(false);
    //
    // const showSidebar = () => setSidebar(!sidebar);
    // const hideSidebar = () => setSidebar(false); // added
    //


    return (

        <div>

            <div className="navBar">


                <div className="logo">
                    <GiIcons.GiShoonerSailboat className="globe-icon"/>
                    <div className="logo-name">Yacht trip</div>
                </div>

                <div className="menu">
                    <Navigation />
                    <MobileNavigation />
                </div>



                {/*<div className="menu">*/}

                {/*    {sidebar && (*/}
                {/*        <nav className="menu-bar">*/}
                {/*            <ul>*/}
                {/*                <li>*/}
                {/*                    <NavLink*/}
                {/*                        style={getStyle()}*/}
                {/*                        to="/"*/}
                {/*                        exact*/}
                {/*                        isActive={(match, location) => location.pathname === "/"}*/}
                {/*                    >*/}
                {/*                        Strona głowna*/}
                {/*                    </NavLink>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <NavLink style={getStyle()} to="/Omnie">*/}
                {/*                        O mnie*/}
                {/*                    </NavLink>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <NavLink style={getStyle()} to="/Rejsy">*/}
                {/*                        Rejsy*/}
                {/*                    </NavLink>*/}
                {/*                </li>*/}
                {/*            </ul>*/}

                {/*        </nav>*/}
                {/*    )}*/}

                {/*    <button onClick={showSidebar}>*/}
                {/*        {sidebar ? (*/}
                {/*            <AiIcons.AiOutlineClose onClick={hideSidebar} />*/}
                {/*        ) : (*/}
                {/*            <GiIcons.GiHamburgerMenu />*/}
                {/*        )}*/}
                {/*    </button>*/}
                {/*</div>*/}


            </div>
        </div>
    );
}

export default Navbar;


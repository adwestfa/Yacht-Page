import NavLinks from "./Navlinks";
import React, {useState} from "react";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";

function MobileNavigation() {

    const [open, setOpen] = useState(false)

    const hamburgerIcon = <GiIcons.GiHamburgerMenu className="hamburger" onClick={() => setOpen(!open)}/>
    const closeIcon = <AiIcons.AiOutlineClose className="close-icon" onClick={() => setOpen(!open)}/>
    return (
        <>
            <nav className="mobileNavigation-menu">
                {/*<div className="mobileNavigation-menu-box">*/}
                    {open ? closeIcon : hamburgerIcon}
                    {open && <NavLinks/>}
                {/*</div>*/}
            </nav>
        </>
    )
}

export default MobileNavigation

import {NavLink} from "react-router-dom";
import React from "react";
import {motion} from "framer-motion";

function NavLinks() {

    const getStyle = () => ({isActive}) =>
        isActive ? {fontWeight: 700} : undefined;

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return (
        <ul>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.1}}
            >
                <NavLink style={getStyle()} to="/" exact isActive={(match, location) => location.pathname === "/"}>
                    Strona głowna
                </NavLink>

            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.2}}
            >
                <NavLink style={getStyle()} to="/Omnie">
                    O mnie
                </NavLink>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.3}}
            >
                <NavLink style={getStyle()} to="/Rejsy">
                    Rejsy
                </NavLink>
            </motion.li>
        </ul>
    )
}

export default NavLinks
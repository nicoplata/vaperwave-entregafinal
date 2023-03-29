import React from "react";
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import CartWidget from "../CartWidget";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="navBrand">
                    <NavLink className="navLink" to='/'>VAPERWAVE</NavLink>
                </div>
                <ul className="navList">
                    <li><NavLink className="navLink" to='/categoria/smokes'>SMOKES</NavLink></li>
                    <li><NavLink className="navLink" to='/categoria/pods'>PODS</NavLink></li>
                    <li><NavLink className="navLink" to='/categoria/resistencias'>RESISTENCIAS</NavLink></li>
                    <li><NavLink className="navLink" to='/cart'><CartWidget/></NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
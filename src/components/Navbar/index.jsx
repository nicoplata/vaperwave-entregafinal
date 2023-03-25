import React from "react";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="navBrand">
                    <a className="navLink" href="#">VAPERWAVE</a>
                </div>
                <ul className="navList">
                    <li><a className="navLink" href="#">SMOKES</a></li>
                    <li><a className="navLink" href="#">PODS</a></li>
                    <li><a className="navLink" href="#">RESISTENCIAS</a></li>
                    <li><a className="navLink" href="#">CARRITO</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
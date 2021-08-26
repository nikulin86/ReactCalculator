import React from 'react';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div className="navbar">
            <h1>React Сalculator</h1>
            <ul className="navbar-list">
                <li className="">
                    <NavLink className="navbar-list_item" activeClassName="active" to="/" exact >Class</NavLink>
                </li>
                <li className="">
                    <NavLink className="navbar-list_item" to="/hook">Hook</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
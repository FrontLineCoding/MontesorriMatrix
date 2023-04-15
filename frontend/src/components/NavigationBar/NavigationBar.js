import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import './NavigationBar.css'
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';
import ChildrenListOpen from "../ChildrenListOpen/ChildrenListOpen";
import ChildrenOptions from "../ListChildren/ChildrenOptions";


const NavigationBar = ({ user }) => {

    const dispatch = useDispatch();

    return (
    <>
        <div className='navigation-container'>
            <ChildrenListOpen user={user}/>
            <ChildrenOptions />
        </div>
    </>)

}

export default NavigationBar;

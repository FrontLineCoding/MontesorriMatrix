import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import './ChildrenOptions.css'
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';


const ChildrenOptions = () => {

    const dispatch = useDispatch();

    return (
    <>
        <div className='navigation-container'>
            <div className='navigation-options-container'>
                <NavLink
                to='/journey'
                className='navigation-option'>
                    Journey
                </NavLink>
                <NavLink
                to='/cirriculm'
                className='navigation-option'>
                    Cirriculum
                </NavLink>
                <NavLink
                to='/profile'
                className='navigation-option'>
                    Profile
                </NavLink>
            </div>
            <div className='user-options-container'>user</div>
            <h2 onClick={(e) => {e.preventDefault();dispatch(sessionActions.logout()); console.log('clicked');}}>logout</h2>

        </div>
    </>)

}

export default ChildrenOptions;

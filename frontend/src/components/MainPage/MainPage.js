import * as sessionActions from '../../store/session';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const MainPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const checkCurrentUser = useSelector(state => state.session.user);

    if (!checkCurrentUser) {
        history.push('/');
    }
    useEffect(() => {
        // dispatch(getGuideChildren())
    },[])


    return <>
    <div className='main-page-main-container'>
        {/* <h2 onClick={() => {dispatch(sessionActions.logout())}}>logout</h2> */}
        <div className='selected-content-container'></div>
    </div>
    </>
}

export default MainPage;

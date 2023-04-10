import * as sessionActions from '../../store/session';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const MainPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();


    return <>
        <h2 onClick={() => {dispatch(sessionActions.logout()); return (<Redirect to='/' />)}}>logout</h2>
    </>
}

export default MainPage;

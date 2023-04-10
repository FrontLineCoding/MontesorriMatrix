import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoginForm.css'




const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [username, setUsernsame] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return(
        <Redirect to='/' />
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ username, password }))
        .catch(async (res) => {
            console.log('LoginForm.js: ', {username, password});
            const data = await res.json();
            console.log('DATA:  ', data);
            if (data.statusCode === 401) {setErrors([data.message])};
          });
      }

      return (
        <form onSubmit={handleSubmit}
        className='login-main-container'>
          <ul>
            {errors.map((error, idx) => (<li key={idx}>{error}</li>))}
          </ul>
          <div className='login-form-container'>
            <div className='inputs-container'>
                <label className='username-container'>
                    <p className='username-text'>Username</p>
                    <input
                    className='username-input'
                    type="text"
                    value={username}
                    onChange={(e) => setUsernsame(e.target.value)}
                    required
                    />
                </label>
                <label className='password-container'>
                    <p className='password-text'>Password</p>
                    <input
                    className='password-input'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
            </div>
          <button type="submit" className='login-button'>Log In</button>
          </div>
        </form>
      );

}

export default LoginForm;

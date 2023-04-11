import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignUp.css'




const SignUp = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [username, setUsernsame] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    if (sessionUser) return(
        <Redirect to='/main-page' />
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confirmPassword){
            setErrors([]);
            return dispatch(sessionActions.signup({ username, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data.statusCode === 401) {setErrors([data.message])};
              });
        }
      }

      return (
        <div className='return-signup-container'>
            <form onSubmit={handleSubmit}
            className='signup-main-container'>
            <ul>
                {errors.map((error, idx) => (<li key={idx}>{error}</li>))}
            </ul>
            <div className='signup-form-container'>
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
                        <div className='password-outter-input'>
                            <input
                            id='sign-up-password'
                            className='password-input'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            >
                            </input>
                            <div className='show-password-boolean'>{
                                showPassword ?
                                <div className='hide-password-div'>
                                    <p className='hide-password-text'
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                        const passwordShow = document.getElementById('sign-up-password');
                                        passwordShow.type = 'password';
                                    }}
                                    >Hide</p>
                                </div>                            :
                                <div className='hide-password-div'>
                                    <p className='hide-password-text'
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                        const passwordShow = document.getElementById('sign-up-password');
                                        passwordShow.type = 'text';
                                    }}
                                    >Show</p>
                                </div>}
                            </div>
                        </div>
                    </label>
                    <label className='password-confirm-container'>
                        <p className='password-confirm-text'>Confirm Password</p>
                        <div className='password-outter-input'>
                            <input
                            id='sign-up-confirm-password'
                            className='password-confirm-input'
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            >
                            </input>
                            <div className='show-password-boolean'>{
                                showConfirmPassword ?
                                <div className='hide-password-div'>
                                    <p className='hide-password-text'
                                    onClick={() => {
                                        console.log('clicked confirm password', showConfirmPassword);
                                        setShowConfirmPassword(!showConfirmPassword);
                                        const confirmPasswordShow = document.getElementById('sign-up-confirm-password');
                                        confirmPasswordShow.type = 'password';
                                    }}
                                    >Hide</p>
                                </div>                            :
                                <div className='hide-password-div'>
                                    <p className='hide-password-text'
                                    onClick={() => {
                                        setShowConfirmPassword(!showConfirmPassword);
                                        const confirmPasswordShow = document.getElementById('sign-up-confirm-password');
                                        confirmPasswordShow.type = 'text';}}
                                    >Show</p>
                                </div>}
                            </div>
                        </div>
                    </label>

                </div>
            <button type="submit" className='sign-up-button'>Start Managing!</button>
            </div>
            </form>
        </div>
      );

}

export default SignUp;

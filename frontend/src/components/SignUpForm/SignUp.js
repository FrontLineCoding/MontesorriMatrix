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

    if (sessionUser) return(
        <Redirect to='/main-page' />
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.signup({ username, password }))
        .catch(async (res) => {
            const data = await res.json();
            if (data.statusCode === 401) {setErrors([data.message])};
          });
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
                                    onClick={() => {setShowPassword(!showPassword)}}
                                    >Hide</p>
                                </div>                            :
                                <div className='hide-password-div'>
                                    <p className='hide-password-text'
                                    onClick={() => {setShowPassword(!showPassword)}}
                                    >Show</p>
                                </div>}
                            </div>
                        </div>
                    </label>
                </div>
            <button type="submit" className='signup-button'>Start Managing!</button>
            </div>
            </form>
        </div>
      );

}

export default SignUp;

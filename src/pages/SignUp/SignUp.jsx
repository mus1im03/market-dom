import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignUp } from '../../features/applicationSlice';

const SignUp = () => {
    
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSetName = (e) => {
        setLogin(e.target.value)
    }

    const handleSetPass = (e) => {
        setPassword(e.target.value)
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        dispatch(authSignUp({ login, password }))
    }

    return (
        <div className='login_block'>
            <form onSubmit={handleSignUp}>
                <h1>Auth</h1>
                <div className='input-box'>
                <input type="text" value={login} placeholder='login' onChange={handleSetName} className='login'/>
                </div>
                <div className='input-box'>
                <input type="password" value={password} placeholder='password' onChange={handleSetPass} className='password'/>
                </div>
                <button type='submit' className='auth_button'>auth</button>
            </form>
        </div>
    );
};

export default SignUp;
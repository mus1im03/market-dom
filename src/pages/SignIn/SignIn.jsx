import { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authSignIn } from '../../features/applicationSlice';

const SignIn = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSetName = (e) => {
        setLogin(e.target.value)
    }

    const handleSetPass = (e) => {
        setPassword(e.target.value)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        dispatch(authSignIn({ login, password }))
    }

    // if(error) {
    //     return <div>{error}</div>
    // }

    return (
        <div className='login_block'>
            <form onSubmit={handleSignIn}>
                <h1>Login</h1>
                <div className='input-box'>
                <input type="text" value={login} placeholder='login' onChange={handleSetName} className='login'/>
                </div>
                <div className='input-box'>
                <input type="password" value={password} placeholder='password' onChange={handleSetPass} className='password'/>
                </div>
                <button type='submit' className='auth_button'>login</button>
            </form>
        </div>
    );
};

export default SignIn;
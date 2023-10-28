import React from 'react'
import LoginButton from './LoginButton'
import SignUpButton from './SignUpButton'
import Title from '../title/Title'
import './LoginComponent.css'
import Logo from '../title/Logo'
const LoginComponent = ()=>{
    return(<>
    <div className='top-wrapper'>
    <div className='title-wrapper'><Title/></div>
    
    
    <div className='ls-wrapper'>
        
        <div className='signup'><SignUpButton/></div>
        <div className='login'><LoginButton/></div>
    </div>
    </div>
    </>
    )
}
export default LoginComponent
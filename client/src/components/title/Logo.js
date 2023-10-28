import React from 'react'
import uniport from './uniportlogo.png'
import nsche  from './nsche.png'
import './Title.css'


const Logo = ()=>{
    return<>
    <div className='logo'>
<img src = {uniport} alt='uniport logo'/>
<img src={nsche} alt='nsche logo'/>
</div>
    </>
}
export default Logo
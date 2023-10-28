import React from 'react'
import './Welcome.css'
import Title from '../components/title/Title'

const Welcome = ()=>{
    return<>
    <div className='welcome-wrapper' >
        <div style={{marginLeft:'5vw'}}><Title/></div>
        <div><p className='welcome-text'>Welcome</p></div>
        <div><button >Start solving a problem</button></div>
        <div><button>Pending problems</button></div>
        <div><button>Solved Problems</button></div>
    </div>
    </>
}
export default Welcome
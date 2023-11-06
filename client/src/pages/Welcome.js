import React from 'react'
import './pages.css'
import WTitle from '../components/welcome_title/WTitle'
import createClass from 'create-react-class'
import {useNavigate} from 'react-router-dom'
const Welcome = () => {
    const navigate = useNavigate()
    const goToSolveEntry = ()=>{
        navigate('/solve')
    }
    var Buttons = createClass({
        render: function() {
            return<div className='btns'>
            <button style={{width:'4cm'}} onClick={goToSolveEntry}>Start solving a problem</button>
                <button style={{width:'4cm'}}>Pending problems</button>
            <button style={{width:'4cm'}}>Solved Problems</button>
        </div>;
        }
    });
    return <>
        <div className='welcome-wrapper' >
            <div ><WTitle /></div>
            <div><p className='welcome-text'>Welcome</p></div>
               
           <div className='btns'><Buttons/></div>

        </div>
    </>
}
export default Welcome
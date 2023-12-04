import React,{useEffect} from 'react'
import './pages.css'
import WTitle from '../components/welcome_title/WTitle'
import createClass from 'create-react-class'
import { useNavigate } from 'react-router-dom'
import { isAuthorized } from '../utils/auth'
const Welcome = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem('optiusername')
useEffect(()=>{
    const authorised =isAuthorized()
    console.log(authorised)
    if (authorised===false){
        navigate('/login')
    }
},[])

    const goToSolveEntry = () => {
        navigate('/solve-entry')
    }
    var Buttons = createClass({
        render: function () {
            return <div className='buttons-wrapper'>
                <div>Welcome, Dear {name}</div>
                <div className='buttons'> 
                    <button style={{ width: '4cm', height: '4cm' }}>Learn About Linear Programming   (Simplex Method)</button>
                    <br/>
                    <button style={{ width: '4cm', height: '4cm' }} onClick={goToSolveEntry}>Start solving a problem</button>
                </div>
                <div className='buttons'> 
                    <button style={{ width: '4cm', height: '4cm' }}>Pending problems</button>
                    <button style={{ width: '4cm', height: '4cm' }}>Solved Problems</button>
                </div>
            </div>;
        }
    });
    return <>
        
            <div className='welcome-wrapper' >
                <div ><WTitle /></div>
                <div><p className='welcome-text'>Welcome</p></div>

                <Buttons/>

            </div>
    
    </>
}
export default Welcome
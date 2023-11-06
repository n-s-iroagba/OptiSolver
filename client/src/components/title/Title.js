import React from 'react'
import './Title.css'
import Logo from './Logo'
import createClass from 'create-react-class'
import {useNavigate} from 'react-router-dom'
const Title = ()=>{
    const navigate = useNavigate()
    var WriteUp =createClass({
        render: function() {
            return <p className='p-block'>SIMPLEX SOLVER</p>;
        }
    });
    var Login = createClass({
        render: function() {
            return<button onClick={()=>navigate('/welcome')} >Login</button>;
        }
    });
    
    return<>
   
     <div className='title-wrapper'>
       <WriteUp/>
       <Logo/>
       <Login/>
     </div>    

    </>
}
export default Title
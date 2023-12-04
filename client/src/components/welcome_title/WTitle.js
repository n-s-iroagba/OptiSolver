import React from 'react'
import './WTitle.css'
import Logo from '../title/Logo'
import createClass from 'create-react-class'
const WTitle = ()=>{
    var WriteUp =createClass({
        render: function() {
            return <p className='optisolver' >OPTISOLVER</p>;
        }
    });
   
    
    return<>
   
     <div className='wtitle-wrapper'>
       <WriteUp/>
       <Logo/>
     </div>    

    </>
}
export default WTitle
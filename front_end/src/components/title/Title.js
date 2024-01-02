import React from 'react'
import Logo from './Logo'
import createClass from 'create-react-class'
const Title = ()=>{
    var WriteUp =createClass({
        render: function() {
            return <p className='optisolver' >OPTISOLVER</p>;
        }
    });
   
    
    return<>
   
     <div className='title-wrapper'>
       <WriteUp/>
       <Logo/>
     </div>    

    </>
}
export default Title
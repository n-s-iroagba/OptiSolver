import React from "react";
import { Spinner } from "react-bootstrap";


function MySpinner() {
    return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100vw',height:'100vh'}}>
      <Spinner  variant='light' animation="border" role="status">
      </Spinner>
        <span style={{color:'white'}}>Solving...</span>
        <span style={{color:'white'}}>please wait this may take a short while</span>
    </div>
    );
  }
  export default MySpinner;
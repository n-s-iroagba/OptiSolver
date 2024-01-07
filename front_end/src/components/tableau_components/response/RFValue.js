import React, { useContext } from "react";
import { MatrixContext } from "../../../context/SimplexContext";
import { preventNewLine } from "../../../utils/createTableauHelper";
import { fIpush } from "../../../utils/createTableauHelper";


const RFValue =()=>{

const {responseTableau,iTableau,setITableau} = useContext(MatrixContext)

let tempFValue;


if (responseTableau.fValue===false){
  
    tempFValue = (
        <td style={{  width:'1.6cm',color: 'white' ,height: '1.5cm', borderTop: '2px solid grey', textAlign: 'center'}}>
            F={iTableau.fValue}
        </td>
    )
} else if (responseTableau.fValue === true) {
    tempFValue = ( <div style={{display:'inline',textAlign:'center',color:'white'}}>F = 
        <td contentEditable style={{  width:'1.6cm',color: 'white' ,height: '1.5cm', borderTop: '2px solid grey', textAlign: 'center',backgroundColor: 'red', }}>
            <span onKeyDown={(e) => preventNewLine(e)}
        onInput={(e) => fIpush(e, iTableau, setITableau)}>{iTableau.fValue}</span>
        </td>
        </div>);
}


    return<>
    <div>{tempFValue}</div>
    </>
}
export default RFValue;
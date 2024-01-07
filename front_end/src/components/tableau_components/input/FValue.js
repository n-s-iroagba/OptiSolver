import React, { useContext, useEffect } from "react";
import { MatrixContext } from "../../../context/SimplexContext";
import { preventNewLine } from "../../../utils/createTableauHelper";
import { fIpush } from "../../../utils/createTableauHelper";


const FValue =React.memo(()=>{
    const {iTableau,setITableau} = useContext(MatrixContext)
    useEffect(()=>{
        let tempTab ={...iTableau}
        tempTab.fValue = 0
        setITableau(tempTab)
    },[])
    let tempFValue; const content = (
        <span
            contentEditable
            onKeyDown={(e) => preventNewLine(e)}
            onInput={(e) => fIpush(e, iTableau, setITableau)}
            style={{  color: 'white' }}
        >
            0
        </span>
    );
    tempFValue = (
        <td style={{  color: 'white' ,height: '1.5cm', borderTop: '2px solid grey', textAlign: 'center' }}>
            F={content}
        </td>
    );
    return<>
    <div>{tempFValue}</div>
    </>
})
export default FValue;

import { bIPush } from "./iPush"

const createIBasicVariables = (dimensions,setRows,preventNewLine,iTableau,setITableau)=>{
let tempRows=[]
let tempBv=[] 

    let len = dimensions.numberOfRows-1
    let i = 0
    for (i; i <= len; i++) {
        tempRows.push(<td>X<sub  contentEditable onKeyDown={
            (e) =>preventNewLine(e)} onInput={
              (e) => {
                bIPush(i,e,iTableau,setITableau) }}>0</sub></td>)
        tempBv.push(i)
    }
    let tempTab = iTableau
    tempTab.basicVariables=tempBv
    setITableau(tempTab)
    setRows(tempRows)
    tempRows=[]
    tempBv=[] 
    
}
export default createIBasicVariables
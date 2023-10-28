
import { bIPush } from "./iPush"

const createIBasicVariables = (dimensions,setRows,preventNewLine,ITableau,setITableau)=>{
let tempRows=[]
let tempBv=[] 

    let len = dimensions.numberOfColumns
    let i = dimensions.numberOfRows+1
    for (i; i <= len; i++) {
        tempRows.push(<td>X<sub  contentEditable onKeyDown={
            (e) =>preventNewLine(e)} onInput={
              (e) => {
                bIPush(i,e,ITableau,setITableau) }}>0</sub></td>)
        tempBv.push(i)
    }
    let tempTab = {...ITableau}
    tempTab.basicVariables=tempBv
    setITableau(tempTab)
    setRows(tempRows)
    tempRows=[]
    tempBv=[] 
    
}
export default createIBasicVariables
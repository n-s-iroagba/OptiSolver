import { bcIPush } from "./iPush"
const createIBasicCoefficients = async (dimensions,setRows,iTableau,setITableau,preventNewLine)=>{
let tempBc = [];
let tempRows =[];

    for (let i = 0; i < dimensions.numberOfRows; i++) {
        tempRows.push(<td contentEditable onKeyDown={
            (e) =>preventNewLine(e)} onInput={
              (e) => {
                bcIPush(e,i,iTableau,setITableau)}}>0</td>)
        tempBc.push(0)     
    }
   let tempTab = iTableau
    tempTab.basicCoefficients=tempBc
    await setITableau(tempTab)
    await setRows(tempRows)
    tempRows=[]
    tempBc=[]
   
}
export default createIBasicCoefficients
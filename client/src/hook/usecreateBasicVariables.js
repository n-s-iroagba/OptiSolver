import { useEffect } from "react"
import { bPush } from "../utils/push"

const useCreateBasicVariables = (dimensions,temp,temp_rows,setRows,setHeader,preventNewLine,tableau,setTableau)=>{
let temp_bv=[]
useEffect (()=>{
    let i = dimensions.numberOfColumns
    let len= dimensions.numberOfRows
    let num = i - len
    let j = 1
    while (j<=len){
        let digit = num+j
        temp_rows.push(<td>X<sub  contentEditable onKeyDown={
            (e) =>preventNewLine(e)} onInput={
              (e) => {
                bPush(i,e,tableau,setTableau) }}>{digit}</sub></td>)
        temp_bv.push(i)
       j++
    }
    let temp_tab = {...tableau}
    temp_tab.basicVariables=temp_bv
    setTableau(temp_tab)
    setRows(temp_rows)
        temp_rows=[]
        temp_bv=[]
        
    for (let i = 0; i<1;i++){
        temp.push(<td>Basis</td>)

    }
    setHeader(temp)
    temp = []
    
    
    },[])

}
export default useCreateBasicVariables
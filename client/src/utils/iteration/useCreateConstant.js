import { useEffect } from "react"
import { cPush } from "../utils/push"

const CreateConstant = (dimensions,preventNewLine,temp,tempRows,setRows,setHeader,tableau,setTableau)=>{
    useEffect(()=>{
    let temp_constants = []
    
        for (let i = 0; i < dimensions.numberOfRows; i++) {
            tempRows.push(<td contentEditable onKeyDown={
                (e) => preventNewLine(e)} onInput={
                    (e) => {
                       cPush(i,e,tableau,setTableau)
                    }}>0</td>)
                    temp_constants.push(0)
        }

        setRows(tempRows)
        let temp_tab = {...tableau}
        temp_tab.constants= temp_constants
        setTableau(temp_tab)
        temp_constants = []
        tempRows= []
        for (let i = 0; i < 1; i++) {
            temp.push(<td>Constants</td>)

        }
        setHeader(temp)
        temp = []
      },[])
   
}
export default CreateConstant
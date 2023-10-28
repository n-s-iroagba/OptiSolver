import React from 'react'
import { useEffect } from 'react'
import { ocPush } from '../utils/push'

export const useCreateObjectiveCoefficient = (dimensions,tableau,setTableau,temp_row,setRow,preventNewLine) => {
    
    let temp_oc = []
    useEffect(() => {
        for (let i = 0; i < dimensions.numberOfRows; i++) {
            temp_row.push(<td contentEditable onKeyDown={
                (e) =>preventNewLine(e)} onInput={
                  (e) => {
                    ocPush(e,i,tableau,setTableau)}}>0</td>)     
           temp_oc.push(0)
        }
        let temp_tab = {tableau}
        temp_tab.objectiveCoefficient = temp_oc
        setRow(temp_row)
        setTableau(temp_tab)
      

    }, [])
}
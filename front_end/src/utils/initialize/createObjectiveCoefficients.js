import React from 'react'
import { ocPush } from './push'
import { preventNewLine } from '../preventNewLine'

export const createObjectiveCoefficient = async(dimensions,tableau,setTableau,setRow) => {
    
    let tempOc=[]
    let tempRow = []

        for (let i = 0; i < dimensions.numberOfColumns; i++) {
          tempRow.push(<td contentEditable onKeyDown={
            (e) =>preventNewLine(e)} onInput={
              (e) => {
                ocPush(e,i,tableau,setTableau)}}>0</td>)
           tempOc.push(0)
        }
        let tempTab = tableau
        tempTab.objectiveCoefficients = tempOc
        setRow(tempRow)
        setTableau(tempTab)
        tempOc=[]
        tempRow = []
}
export default createObjectiveCoefficient;
import React from "react";
import {createContext,useState} from "react";
export const MatrixContext = createContext();

export const MatrixContextProvider = ({children}) => {
    const tempTab = {
        name:'',
        basicCoefficients:[],
        constraintEquations:[[2,2,2,2],[4,44,4,4]],
        basicVariables:[1,2],
        crow:[]
    }
    const [header, setHeader] = useState([1,2,3,4])
    const [dimensions, setDimensions] = useState( {
        numberOfRows:2,
        numberOfColumns:4
    })
    const [change,setChange] = useState(true)
    const [index, setIndex] = useState(0)
    const [tableau, setTableau] = useState(tempTab)
    const [iTableau,setITableau] = useState(tempTab)
    const [rTableau,setRTableau] = useState(tempTab)
    const [solvedArray, setSolvedArray] = useState([{constraintEquations:[[1,2,3,4],[2,3,4,5]],basicVariables:[1,2]}])
    
    
        return<MatrixContext.Provider 
        value={{index, setIndex,solvedArray, setSolvedArray,rTableau,setRTableau,dimensions,setDimensions,tableau,setTableau,iTableau,setITableau, setHeader,header, setHeader,change,setChange}}>
            {children}
        </MatrixContext.Provider>
}
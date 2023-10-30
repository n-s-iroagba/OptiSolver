import React from "react";
import {createContext,useState} from "react";
export const MatrixContext = createContext();

export const MatrixContextProvider = ({children}) => {
    const tempTab = {
        name:'',
        objectiveCoefficients:[],
        basicCoefficients:[],
        constraintEquations:[],
        basicVariables:[],
        constants:[],
        cRow:[],
        fValue:0,
        date:null
    }
    const iTempTab = {
        basicCoefficients:[],
        constraintEquations:[],
        basicVariables:[],
        constants:[],
        cRow:[],
        ratio:[],
        fValue:0
    }
    const [header, setHeader] = useState([])
    const [dimensions, setDimensions] = useState( {
        numberOfRows:2,
        numberOfColumns:4
    })
    const [change,setChange] = useState(true)
    const [index, setIndex] = useState(0)
    const [tableau, setTableau] = useState(tempTab)
    const [iTableau,setITableau] = useState(iTempTab)
    const [rTableau,setRTableau] = useState ({
        basicCoefficients:[],
        constraintEquations:[],
        basicVariables:[],
        constants:[],
        cRow:[],
        ratio:[],
        fValue:null
    })
    const [page,setPage] = useState(1)

    const [solvedArray, setSolvedArray] = useState([{
        constraintEquations:[[1,2,3,4],[2,3,4,5]],
        basicVariables:[1,2],
        constraintEquations:[[1,3,4,5],[0,0,0,0,0]],
        constants:[1,4],
        cRow:[0,1,0,0],
        ratio:[1,0],
        fValue:2,
        basicCoefficients:[2,0],
    }])
    
    
        return<MatrixContext.Provider 
        value={{rTableau,setRTableau,page,setPage,index, setIndex,solvedArray, setSolvedArray,dimensions,setDimensions,tableau,setTableau,iTableau,setITableau,header, setHeader,change,setChange}}>
            {children}
        </MatrixContext.Provider>
}
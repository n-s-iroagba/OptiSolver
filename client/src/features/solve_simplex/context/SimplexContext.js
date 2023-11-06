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
        numberOfColumns:5
    })
    const[iteration, setIteration]= useState(0)
    const [change,setChange] = useState(true)
    const [index, setIndex] = useState(0)
    const [tableau, setTableau] = useState(tempTab)
    const [iTableau,setITableau] = useState(iTempTab)
    const [rTableau,setRTableau] = useState ({
        basicCoefficients:[1,-1],
        constraintEquations:[[1,2,2,1,0],[]],
        basicVariables:[],
        constants:[],
        ratio:[],
        fValue:null
    })
    const [page,setPage] = useState(0)

    const [solvedArray, setSolvedArray] = useState([])
    const [length,setLength] = useState(0)
    
    
        return<MatrixContext.Provider 
        value={{iteration, setIteration,length,setLength,rTableau,setRTableau,page,setPage,index, setIndex,solvedArray, setSolvedArray,dimensions,setDimensions,tableau,setTableau,iTableau,setITableau,header, setHeader,change,setChange}}>
            {children}
        </MatrixContext.Provider>
}
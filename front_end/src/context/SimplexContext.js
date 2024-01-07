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
        crow:[],
        date:null
    }
    const iTempTab = {
        basicCoefficients:[],
        constraintEquations:[],
        basicVariables:[],
        constants:[],
        crow:[],
        ratio:[],
        fValue:0
    }
   
    const [header, setHeader] = useState([])
    const [dimensions, setDimensions] = useState( {
        numberOfRows:2,
        numberOfColumns:3
    })
    const[iteration, setIteration]= useState(1)
    const [change,setChange] = useState(true)
    const [index, setIndex] = useState(0)
    const [tableau, setTableau] = useState(tempTab)
    const [iTableau,setITableau] = useState(iTempTab)
    const [responseTableau,setResponseTableau] = useState ({
        basicCoefficients:[],
        constraintEquations:[],
        basicVariables:[],
        constants:[],
        ratio:[],
        fValue:false,
        crow:[]
    })
    const tempDetails={username:'',password:'',email:''}
    const [details,setDetails] = useState(tempDetails)
    const [page,setPage] = useState(0)

    const [solvedArray, setSolvedArray] = useState([])
    const [length,setLength] = useState(0)
    
    
    
        return<MatrixContext.Provider 
        value={{details,setDetails,iteration, setIteration,length,setLength,responseTableau,setResponseTableau,page,setPage,index, setIndex,solvedArray, setSolvedArray,dimensions,setDimensions,tableau,setTableau,iTableau,setITableau,header, setHeader,change,setChange}}>
            {children}
        </MatrixContext.Provider>
}
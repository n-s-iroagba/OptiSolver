import React, { useContext } from "react";
import { MatrixContext } from "../../context/SimplexContext";
import { Button } from "react-bootstrap";
import "./Definition.css"


const Definition =()=>{
    const {solution,setPage} = useContext(MatrixContext)

    return<>
    <div className="definition-wrapper">
    <div >Feasibility of solution: {solution.feasibility}</div>
        <div>Boundedness of solution: {solution.boundedness}</div>
        <div>uniqueness of solution: {solution.uniqueness}</div>
        <Button variant='dark' onClick={()=>setPage(2)}>Cross Check Solutions</Button>
    </div>
    
    </>
}
export default Definition;
import React, { useContext } from "react";
import { MatrixContext } from "../../context/SimplexContext";
import { Button } from "react-bootstrap";
import "./Definition.css"


const Definition =()=>{
    const {solution,setPage,length} = useContext(MatrixContext)
const navigatetopage =()=>{
    console.log(length)
    if (length===1){
        setPage(-6)
    }else{
        setPage(2)
    }
}
    return<>
    <div className="definition-wrapper">
    <h6>Details of the simplex solution</h6>
    <div >Feasibility of solution:---- {solution.feasibility}</div>
        <div>Boundedness of solution:---- bounded</div>
        <div>uniqueness of solution:---- {solution.uniqueness}</div>
        <Button className='the-button'variant='dark' onClick={navigatetopage}>Cross Check Solutions</Button>
    </div>
    
    </>
}
export default Definition;
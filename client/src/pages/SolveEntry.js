import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MatrixContext } from "../features/solve_simplex/context/SimplexContext";
import { Button } from "react-bootstrap";
import axios from "axios";
import './pages.css'
import { getNames } from "../utils/api";

const SolveEntry = () => {
  const navigate = useNavigate()
  const { dimensions, tableau, setTableau, setDimensions, setPage } = useContext(MatrixContext)
  const [validated, setValidated] = useState(false)
  const [names,setNames] = useState([])
  const [uniqueName,setUniqueName] = useState(true)

  
   useEffect(()=>{
           const fetchNames = async ()=>{
            try {
              const tempNames = await  getNames();
              setNames(tempNames.data);
            } catch (error) {
              console.error('Error:', error);
            }
          };
      
          fetchNames();
   },[])

  const move = (event) => {
    const dimension = {numberOfColumns:parseInt(dimensions.numberOfColumns),numberOfRows:parseInt(dimensions.numberOfRows)}
    let ratioRows=[]
  let cRowColumns=[]
    localStorage.setItem('localDimensions', JSON.stringify(dimension))
    localStorage.setItem('name', tableau.name)
    if (!uniqueName){
      alert("Please enter a unique name for your problem")
      return;
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false||!uniqueName) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(dimension)
      
    if(dimension.numberOfColumns==0||dimensions.numberOfRows==0){
      alert("field can not have the value 0")
      return;
    }
    for(let i = 0;i<dimension.numberOfRows,i++;){
      ratioRows.push(0)
      console.log(ratioRows)
  }
  localStorage.setItem('iRatio',JSON.stringify(ratioRows))

  for(let i = 0;i<dimension.numberOfColumns,i++;){
      cRowColumns.push(0)
  }
  localStorage.setItem('iCrow',JSON.stringify(cRowColumns))

  console.log(JSON.parse(localStorage.getItem('iCrow')))

    setValidated(true);
    navigate('/solve')
  };



  const handleChangeRows = async (e) => {
    let tempDimensions = { ...dimensions }
    tempDimensions.numberOfRows = e.target.value
    await setDimensions(tempDimensions)
  }
  const handleChangeColumns = async (e) => {
    let tempDimensions = { ...dimensions }
    tempDimensions.numberOfColumns = e.target.value
    await setDimensions(tempDimensions)
  }
  const handleChangeName = async (e) => {
    let tempTabs ={...tableau}
    tempTabs.name  = e.target.value
    let name = tempTabs.name
    if(names.includes(name)){
    alert('name already exists')
    setUniqueName(false)
      e.stopPropagation();
    }
    await setTableau(tempTabs)
  }

  return (
    <div className='solve-entry-wrapper'>
      <Form style={{ width: '50vw' }} validated={validated} onSubmit={move} >
        <Form.Group
          as={Col}
        >
          <Form.Label className="text-light"><h2>To get started, fill in the form below</h2></Form.Label>
        </Form.Group>
        <br />
        <Form.Group
          as={Col}
        >
          <Form.Label className="text-light">Give your simplex problem a unique name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the problem name"
            value={tableau.name}
            onChange={(e) => handleChangeName(e)}
            name="name"
            required
          />
        </Form.Group>
        <br />
        <Form.Group
          as={Col}
        >
          <Form.Label className="text-light">Number coefficients of the objective function in canonical form</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="0"
            value={dimensions.numberOfColumns}
            onChange={(e) => handleChangeColumns(e)}
          />
        </Form.Group>
        <br />
        <Form.Group
          as={Col}
        >
          <Form.Label className="text-light">Enter Number Of Constraint Equations</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="0"
            value={dimensions.numberOfRows}
            onChange={(e) => handleChangeRows(e)}

          />
        </Form.Group>
        <br />
        <Button variant="dark" type="submit">
          Proceed
        </Button>
      </Form>
    </div>

  )
};
export default SolveEntry;
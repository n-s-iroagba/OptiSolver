import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { MatrixContext } from "../../context/SimplexContext";
import { Button } from "react-bootstrap";
import { getNames } from "../../utils/api";
import './forms.css'
import { isValidMatrix } from "../../utils/actions";
const EntryForm = React.memo(() => {
  const { dimensions, tableau, setTableau, setDimensions, setPage } = useContext(MatrixContext)
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

  const handleSubmit = () => {

  const validEntry = isValidMatrix(dimensions)
  if (validEntry&&uniqueName) {
    setPage(1)
  }else{
    alert('invalid entry')
  }
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
    <div className="signup-container">
    <Form  onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername" as={Col} lg={6} className="mx-auto" >
        <Form.Label>Give the problem a unique</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a name"
          name="name"
          value={tableau.name}
          onChange={handleChangeName}
        />
      </Form.Group>
      <br />
      <Form.Group controlId="formEmail" as={Col} lg={6} className="mx-auto">
        <Form.Label>Number of Coefficients in the Objective function in <b>CANONICAL*</b> form</Form.Label>
        <Form.Control
          type="number"
          name="objectivefunction"
          value={dimensions.numberOfColumns}
          onChange={handleChangeColumns}
        />
      </Form.Group>
      <br />
      <Form.Group controlId="formEmail" as={Col} lg={6} className="mx-auto">
        <Form.Label>Number of Constraint Equations</Form.Label>
        <Form.Control
          type="number"
          name="constraintequation"
          value={dimensions.numberOfRows}
          onChange={handleChangeRows}
        />
      </Form.Group>
      <br />
    </Form>
    <div className="signup-button-wrapper">
        <Button className="signup-button" variant="dark" onClick={handleSubmit}>
          Proceed
        </Button>
      </div>
  </div>
  )
});
export default EntryForm;
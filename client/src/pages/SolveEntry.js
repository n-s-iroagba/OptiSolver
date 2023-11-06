import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useContext } from "react";

import { MatrixContext } from "../features/solve_simplex/context/SimplexContext";
import './pages.css'

const SolveEntry = () => {

  const { dimensions, tableau, setTableau, setDimensions,setPage } = useContext(MatrixContext)


  const move = () => {
   setPage(1)
  }
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
    let tempTabs = { ...tableau }
    tempTabs.name = e.target.value
    await setTableau(tempTabs)
  }

  return (
    <div className='solve-entry-wrapper'>
      <div>
        &nbsp;
        &nbsp;
        &nbsp;
        <Form style={{ width: '50vw' }} >
          <Form.Group
            className="column-center"
            as={Col}
            sm='10'
          >
            <Form.Label className="text-light"><h2>To get started, fill in the form below</h2></Form.Label>
          </Form.Group>
          &nbsp;
          &nbsp;
          &nbsp;
          <Form.Group
            className="column-center"
            as={Col}
            sm='10'
          >
            <Form.Label className="text-light">Give your simplex problem a unique name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the problem name"
              value={tableau.name}
              onChange={(e) => handleChangeName(e)}
              name="name"
            />
          </Form.Group>
          &nbsp;
          &nbsp;
          &nbsp;
          <Form.Group
            className=""
            as={Col}
            sm = '10'
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
          &nbsp;
          &nbsp;
          &nbsp;
          <Form.Group
            className=""
            as={Col}
            sm='10'
            controlId='validCustom01'
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
        </Form>
      </div>
      &nbsp;
      <div><button onClick={move}>solve</button></div>
    </div>
  );
};
export default SolveEntry;
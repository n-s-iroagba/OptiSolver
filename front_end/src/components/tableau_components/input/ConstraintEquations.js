import { useState, useEffect } from 'react';
import { MatrixContext } from '../../../context/SimplexContext';
import { useContext } from 'react';
import '../tableau.css';
import ObjectiveCoefficient from './ObjectiveCoefficient';
import { createMultipleColumns } from '../../../utils/createTableauHelper';
import Empty from '../Empty';
import Crow from './Crow'; 

const ConstraintEquations = (props) => {
  const [rows, setRows] = useState([]);
  const { header, setHeader, dimensions } = useContext(MatrixContext);

  useEffect(() => {
    let variable = 'constraintEquations';
    createMultipleColumns(
      dimensions.numberOfRows,
      dimensions.numberOfColumns,
      setRows,
      props.tableau,
      props.setTableau,
      variable,
      setHeader
    );
  }, []);

  return (
    <>
      <div className='center-tableau-wrapper'>
        <ObjectiveCoefficient />
        <table className='single-column'>
          <thead>
            <tr>
              {header.map((variable, index) => {
                return <td style={{ height: '1.6cm' }} key={index}>{variable}</td>;
              })}
            </tr>
          </thead>
          <tbody className='tableau-body'>
            {rows.map((row, index) => {
              return <tr key={index}>{row}</tr>;
            })}
          </tbody>
        </table>

        {props.crow ? <Crow /> : <Empty />}
      </div>
    </>
  );
};

export default ConstraintEquations;

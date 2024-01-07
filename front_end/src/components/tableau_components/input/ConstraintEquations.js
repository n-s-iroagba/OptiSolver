import React, { useState, useEffect } from 'react';
import { MatrixContext } from '../../../context/SimplexContext';
import { useContext } from 'react';
import '../tableau.css';
import ObjectiveCoefficient from './ObjectiveCoefficient';
import HistoryObjectiveCoefficient from '../history/HistoryObjectiveCoefficient';
import { createMultipleColumns } from '../../../utils/createTableauHelper';
import Empty from '../Empty';
import Crow from './Crow';

const ConstraintEquations = React.memo((props) => {
  const [rows, setRows] = useState([]);
  const { header, setHeader, dimensions,tableau} = useContext(MatrixContext);
  let variable = 'constraintEquations';

  useEffect(() => {
    createMultipleColumns(
      dimensions.numberOfRows,
      dimensions.numberOfColumns,
      setRows,
      props.tableau,
      props.setTableau,
      variable,
      setHeader
    );
alert(tableau)
  }, []);

  return (
    <>
      <div className='center-tableau-wrapper'>
        {props.objectiveCoefficients==='iteration'? (
          <HistoryObjectiveCoefficient />
        ) : (
          <ObjectiveCoefficient />
        )}

        <table className='single-column'>
          <thead>
            <tr>
              {header.map((variable, index) => {
                return (
                  <td style={{ height: '1.6cm' }} key={index}>
                    {variable}
                  </td>
                );
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
});

export default ConstraintEquations;

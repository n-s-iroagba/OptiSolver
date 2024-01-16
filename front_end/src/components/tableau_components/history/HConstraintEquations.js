import React from 'react';
import { useContext } from 'react';
import { MatrixContext } from '../../../context/SimplexContext';
import '../tableau.css';
import HObjectiveCoefficient from './HObjectiveCoefficient';
import Crow from '../input/Crow';
import Empty from '../Empty';
import RCrow from '../response/RCrow'


const HConstraintEquations = (props) => {
  let { header } = useContext(MatrixContext);

  return (
    <>
      <div className='center-tableau-wrapper'>
        <HObjectiveCoefficient />
        <table className='single-column'>
          <thead>
            <tr>
              {header.map((variable, index) => {
                return <th key={index}>{variable}</th>;
              })}
            </tr>
          </thead>
          <tbody className='tableau-body'>
            {props.constraintEquations.map((rows, index) => {
              return (
                <tr key={index}>
                  {rows.map((row, i) => {
                    return <td key={i}>{row}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        {props.crow === 'response' ? (
          <RCrow />
        ) : props.crow === 'iteration' ? (
          <Crow />
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
};

export default HConstraintEquations;

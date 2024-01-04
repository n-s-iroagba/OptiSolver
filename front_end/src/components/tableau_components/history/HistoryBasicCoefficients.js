import React from 'react';
import '../tableau.css';
import Empty from '../Empty';

const HistoryBasicCoefficients = (props) => {
  return (
    <>
      <div className='left-tableau-wrapper'>
        <Empty position='bottom' />
        <table className='single-column'>
          <thead>
            <tr>
              <th>C<sub>B</sub></th>
            </tr>
          </thead>
          <tbody className='tableau-body'>
          {
            props.basicCoefficients.map((value, index) => {
              return (<tr key={index}><td>{value}</td></tr>)
            })
          }
        </tbody>
        </table>
        <Empty />
      </div>
    </>
  );
};

export default HistoryBasicCoefficients;

import React from 'react';
import '../tableau.css';
import Empty from '../Empty';
import FValue from '../input/FValue';
import RFValue from '../response/RFValue';

const HistoryConstants = (props) => {
  return (
    <>
      <div className='center-tableau-wrapper'>
        <Empty constant={true} position='inverse-bottom' />
        <table className='constants'>
          <thead>
            <tr>
              <th>Constants</th>
            </tr>
          </thead>
          <tbody className='tableau-body'>
            {props.constants.map((value, index) => {
              return <tr key={index}><td>{value}</td></tr>;
            })}
          </tbody>
        </table>
        {props.fValue === 'iteration' ? (
          <FValue />
        ) : props.fValue === 'response' ? (
          <RFValue />
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
};

export default HistoryConstants;

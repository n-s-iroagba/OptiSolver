import React from 'react';
import '../tableau.css';
import Empty from '../Empty';
import FValue from '../input/FValue';
import RFValue from '../response/RFValue';

const HConstants = (props) => {

let className = ''
let emptyName = ''
if(props.rightEnd){
   className = 'right-tableau-wrapper'
   emptyName= 'right'
}
else{
  className = 'center-tableau-wrapper'
}
  return (
    <>
      <div  className={className}>
        <Empty  type ={emptyName} constant={true} position='inverse-bottom' />
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

export default HConstants;

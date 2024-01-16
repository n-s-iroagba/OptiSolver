import React, { useContext, useEffect } from 'react';
import { MatrixContext } from '../context/SimplexContext';
import Entry from './entry/Entry';
import InitialSolve from './solve/InitialSolve';
import IterationSolve from './solve/IterationSolve';
import FirstSolve from './solve/FirstSolve';
import FResponseSolve from './solve/FResponseSolve';
import ResponseSolve from './solve/ResponseSolve';
import TerminalSolve from './solve/TerminalSolve';
import TerminalResponseSolve from './solve/TerminalResponseSolve';
import Definition from "../components/definiition/Definition";
import { isAuthorized } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import LastResponse from './solve/LastResponse';

const RenderPage = React.memo(() => {
  const { page } = useContext(MatrixContext);
  const navigate = useNavigate();
 
useEffect(()=>{
  const authorised = isAuthorized();
  if (!authorised) {
    navigate('/login');
    alert('You are not authorised to view this page');
  }},[])
  window.onbeforeunload = function() {
    return 'Data will be lost if you leave the page, are you sure?';
  };

  const ConditionalRender = () => {
    switch (page) {
      case -2:return <LastResponse/>
      case -3: return <Definition />;
      case 0: return <Entry />;
      case 1: return <InitialSolve />;
      case 2: return <FirstSolve />;
      case 3: return <FResponseSolve />;
      case 4: return <FResponseSolve />;
      case 5: return <IterationSolve />;
      case 6: return <IterationSolve />;
      case 7: return <ResponseSolve />;
      case 8: return <ResponseSolve />;
      case 9: return <TerminalSolve />;
      case 10: return <TerminalResponseSolve />;
      case 11: return <TerminalResponseSolve />;
      default: return <Entry />;
    }
  };

  return (
    <>
      {ConditionalRender()}
    </>
  );
})

export default RenderPage;

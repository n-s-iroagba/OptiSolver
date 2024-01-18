import React, { useContext, useEffect } from 'react';
import { MatrixContext } from '../context/SimplexContext';
import Entry from './entry/Entry';
import InitialTableau from './solve/InitialTableau';
import FIterationTableau from './solve/FIterationTableau';
import FResponseTableau from './solve/FResponseTableau';
import TResponseTableau from './solve/TResponseTableau';
import Definition from "../components/definiition/Definition";
import { isAuthorized } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import Result from './solve/Result';
import IterationTableau from './solve/IterationTableau';
import ResponseTableau from './solve/ResponseTableau';
import TerminalTableau from './solve/TerminalTableau';
import FResult from './solve/FResult';
import FIterationTableau2 from './solve/FIterationTableau2';
import FResponseTableau2 from './solve/FResponseTableau2';


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
      case -8: return <FResponseTableau2/>
      case -7: return <FResponseTableau2/>
      case -6 : return <FIterationTableau2/>
      case -5: return <FResult/>
      case -2:return <Result/>
      case -3: return <Definition />;
      case 0: return <Entry />;
      case 1: return <InitialTableau />;
      case 2: return <FIterationTableau />;
      case 3: return <FResponseTableau />;
      case 4: return <FResponseTableau />;
      case 5: return <IterationTableau />;
      case 6: return <IterationTableau />;
      case 7: return <ResponseTableau/>;
      case 8: return <ResponseTableau/>;
      case 9: return <TerminalTableau/>;
      case 10: return <TResponseTableau/>;
      case 11: return <TResponseTableau/>;
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

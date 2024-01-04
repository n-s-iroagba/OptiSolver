import React from 'react';
import './board.css'; // You can create a separate CSS file for styling
import { useNavigate } from 'react-router';

const HistoryBoardLinks = (props) => {
    const navigate = useNavigate()
    return (
      <div className="links" onClick={() => navigate(`/${props.path}`)}>
        {props.name}
      </div>
    );
  };
  export default HistoryBoardLinks;
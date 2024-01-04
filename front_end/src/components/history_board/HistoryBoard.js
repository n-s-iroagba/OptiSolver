import React from "react";
import HistoryBoardLinks from "../dashboardnav/HistoryBoardLinks";

const HistoryBoard = () => {
return<>
<div className="history-board">
    <div className="history-board-header">
        <h2>Problems solved</h2>
    </div>
    <HistoryBoardLinks/>
    </div>
</>

}
export default HistoryBoard;
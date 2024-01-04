import React from "react";
import './tableau.css'


const Empty = (props) => {
    const classNames = ["empty"];
    if (props.constant){
        classNames.push('constant-empty')
    }
    if (props.position === "inverse-bottom") {
        classNames.push("inverse-bottom");

    }
    if (props.position === "bottom") {
        classNames.push("bottom");
    }
    if (props.type === "right") {
        classNames.push("right");
      }
      if (props.type === "left") {
      
        classNames.push("left");
      }
      if (props.type === "center") {
        classNames.push("center");
      }
  
    return <div className={classNames.join(" ")}>{props.fValue}</div>;
  };
  
  export default Empty;
  
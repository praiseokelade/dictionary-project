import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.information) {
    return (
      <div className="Results">
        <h2>{props.information.word} </h2>
        {props.information.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

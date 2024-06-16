import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.information) {
    return (
      <div className="Results">
        <h2>{props.information.word} </h2>
        <Phonetics phonetic={props.information.phonetic} />

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

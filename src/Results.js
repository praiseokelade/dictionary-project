import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.information) {
    return (
      <div className="Results">
        <section>
          <h2>{props.information.word} </h2>
          <Phonetics phonetic={props.information.phonetic} />
        </section>
        {props.information.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

import React from "react";
import "./Phonetics.css"

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <p className="phonetic-text">{props.phonetic}</p>
    </div>
  );
}

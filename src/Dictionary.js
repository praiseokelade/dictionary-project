import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function searchKeyword(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);

    let apiKey = `017e2af483beec2b2e23fafdtf1f298o`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchKeyword}>
        <input type="search" onChange={updateKeyword} />
        <input type="submit" />
      </form>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("dictionary");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function searchKeyword() {
    let apiKey = `017e2af483beec2b2e23fafdtf1f298o`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imagesApiUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    searchKeyword();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    searchKeyword();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="dictionary"
              onChange={updateKeyword}
            />
          </form>
        </section>

        <Results information={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

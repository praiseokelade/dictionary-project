import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App shadow">
      <div className="container">
        <header className="App-header">
          <h1>DICTIONARY</h1>
          <p>What word would you like to search up?</p>
        </header>
        <Dictionary />
      </div>
      <footer>
        Coded by Praise Okelade and open-sourced on{" "}
        <a
          href="https://github.com/praiseokelade/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;

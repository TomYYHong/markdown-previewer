import React, { ChangeEvent, MouseEvent, useState } from "react";
import "./App.css";
import RactMarkdown from "react-markdown";
import styled from "styled-components";

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.currentTarget.value);
    console.log(markdown);
  };

  const changeOutput = (event: MouseEvent<HTMLButtonElement>) => {
    setShowGuide(!showGuide);
    console.log(showGuide);
  };

  return (
    <>
      <div>
        <h1> The markdown reviewer</h1>
      </div>
      {/* setOutput(event.target.value) */}
      <div className="mark-input">
        <textarea
          className="input"
          value={markdown}
          onChange={handleChange}
          placeholder="Enter your Markdown here..."
        ></textarea>
        <button onClick={changeOutput}>Markdown input</button>
      </div>

      <div className="mark-output">
        <RactMarkdown>{markdown}</RactMarkdown>
      </div>
    </>
  );
}

export default App;
